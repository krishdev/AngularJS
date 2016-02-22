angular.module('google-chart-example', []).controller("MainCtrl", function ($scope,$http,$log) {

    $scope.infos = "";

    //$http.get('http://ip.jsontest.com')
    //$http.get('https://finance.google.com/finance/info?q=TSE:PXT')
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=csv&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=')
    .success(function(data) {
            //alert ("toto");
            $scope.infos = data;

    })
    .error(function(data) {
            alert ("data="+data);
        $scope.infos = data;
    });


});