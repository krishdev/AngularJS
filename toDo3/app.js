var tradeApp = angular.module('tradeApp',['ngResource','angular.filter']);

var tradeCtrlFn = function($scope,getData){
	$scope.dataInJson = {};
	var arraySymbol = [];
	getData.get(function(data){
		$scope.dataInJson = data.trades;
		
		angular.forEach($scope.dataInJson,function(item){
			var i =0,
				bool = false;
			do{
				if(arraySymbol[i] == item.Symbol){
					bool=true;
				}
				i+=1;
			}while(arraySymbol.length>i);
			if(!bool){
				arraySymbol.push(item.Symbol);
			}
		});
	});
	$scope.calc = function(){
		var obj2 = [
					{symbol:"IBM",Buy:[],Sell:[]},
					{symbol:"XOM",Buy:[],Sell:[]},
					{symbol:"BAC",Buy:[],Sell:[]}
				   ];
		$scope.ifPL = "P/L";
		angular.forEach($scope.dataInJson,function(item){
			item.PL=0;
			var i=0,
				len=obj2.length;
			for(i;i<len;i++){
				if(item.Symbol == arraySymbol[i]){
					for(k in obj2[i]){
						if(obj2[i].hasOwnProperty(k)){
							if(k==item.Action && k=='Buy'){
								/*obj[i][k]+=item.Quantity;
								obj[i]["BuyP"]+=item.Price;*/
								obj2[i][k].push(item.TxnId);
							}
							if(k==item.Action && k=='Sell'){
								/*obj[i][k]+=item.Quantity;
								obj[i]["SellP"]+=item.Price;*/
								obj2[i][k].push(item.TxnId);
							}
						}
					}
				}
			}
		});
		for(var i=0; i < obj2.length;i++) {
			for(k in obj2[i]) {
				console.log(obj2[i][k] + " type of"+ typeof obj2[i][k]);
				if(typeof obj2[i][k]=="object" && k == "Buy"){
					obj2[i][k].sort();
				}
				console.log(obj2[i][k]);
			}
		}//Sort Ends
		
		
		var fecthId = function(){
			var TraxId = [];
			for(var i=0; i < obj2.length;i++) {
				var symb = obj2[i]["symbol"];
				while(obj2[i]["Buy"].length>0){
					var objTemp = {
						buyid:0 , 
						sellid:0
					};
					for(k in obj2[i]) {
						if(k == "Buy" && obj2[i]["symbol"]==symb){
							for(var j=0 ; j < obj2[i][k].length ; j++){
								objTemp["buyid"] = obj2[i][k][j];
								obj2[i][k].shift();
								break;
							}
						}
						if(k == "Sell" && obj2[i]["symbol"]==symb){
							for(var j=0 ; j < obj2[i][k].length ; j++){
								objTemp["sellid"]=obj2[i][k][j]
								obj2[i][k].shift();
								break;
							}
						}
					}
					TraxId.push(objTemp);
				}
			}
			return TraxId;
		}
		
		//Calculating Task 
		var cumPL = 0;
		var performFun = function(buyQun, sellQun, buyPr, sellPr,TraxId){
					var	PL = 0,
						TraxIds = TraxId;
					var diffQuant = 0,
						diffPrice = 0;
			diffQuant = buyQuan - sellQun;
			if(diffQuant == 0){
				PL = (sellPr - buyPr)*buyQun;
				cumPL = cumPL + PL;
			}
			else if(diffQuant < 0){
				PL = (sellPr - buyPr)*buyQun;
				cumPL = cumPL + PL;
			}
			else if(diffQuant > 0){
				PL = (sellPr - buyPr)*sellQun;
			}
			angular.forEach($scope.dataInJson,function(item){
				if(item.TxnId == TraxIds){
					item.PL = PL;
				}
			});
			return;
		}
		
		var arrayTraxId = fecthId();
		console.log(arrayTraxId);
		
			for(var v =0 ; v < arrayTraxId.length ; v++) {
				var buyQuan = 0,
					sellQuan = 0,
					buyPrice = 0,
					sellPrice = 0;
				var TraxIdBuy=0, TraxIdSell=0;
				angular.forEach($scope.dataInJson,function(item) {
					
					if(item.TxnId == arrayTraxId[v]["buyid"] || item.TxnId == arrayTraxId[v]["sellid"]){
						if(item.Action == "Buy"){
							buyQuan = item.Quantity;
							buyPrice =	item.Price;
							TraxIdBuy = item.TxnId;
						}
						if(item.Action == "Sell"){
							sellQuan = item.Quantity;
							sellPrice =	item.Price;
							TraxIdSell = item.TxnId ;
						}
					}
					
				});
				
				performFun(buyQuan, sellQuan, buyPrice, sellPrice,TraxIdSell);
			}
	}
}
tradeApp.controller('tradeCtrl',['$scope','getData',tradeCtrlFn]);

tradeApp.factory('getData',['$resource',function($resource){
	return $resource('trades.json');
}]);