<!DOCTYPE html>
<html ng-app="app">

  <head>
    <meta charset="utf-8" />
    <title>AngularJS Plunker</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css">
    <script>document.write('<base href="' + document.location + '" />');</script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0-rc.2/angular.min.js"></script>
    <link rel="stylesheet" href="style.css" />
    <script src="app.js"></script>
  </head>

  <body ng-controller="MainCtrl">
      <b>Filter according to the status</b>
    <div class="btn-group">
          <button type="button" class="btn btn-primary">Select Status</button>
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li ng-click="selectedStatus('Available')"><a >Available</a></li>
            <li ng-click="selectedStatus('Busy')"><a>Busy</a></li>
            <li ng-click="selectedStatus('Idle')"><a>Idle</a></li>
            <li ng-click="selectedStatus('Offline')"><a>Offline</a></li>
            <li ng-click="selectAll('All')"><a>All</a></li>
          </ul>
    </div>
          <hr>
    <ul>
      <li ng-repeat="user in userArray | customFilter:statusArray">
        <div>
          First Name: <span ng-bind="user.fname"></span>
        </div>
        <div>
          Last Name: <span ng-bind="user.lname"></span>
        </div>
        <div>
          Status: <span ng-bind="user.status"></span>
        </div>
        <hr>
      </li>
    </ul>
  </body>

</html>
