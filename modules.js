   // 1. Define the first app.
   var app = angular.module("mainApp", []);
   
   app.controller("test", function($scope){
    $scope.Hola = {};
	$scope.Hola.fn = "jon";
	$scope.Hola.ln = "doe";
   });
   
   // 2. Define the second app.
   var emp = angular.module("empApp", []);
   
   emp.controller("employee", function ($scope){
	$scope.employee = {
	   firstName: "Matt",
	   lastName: "Kidder"
	};   
   });
   
   //Angular will always bootstrap the first app defined in the view. So, 
   //in this case, mainApp is already bootstrapped. So, do NOT manually
   //bootstrap it, or else exception will occur.   
   //var first = document.getElementById("first");   
   //angular.bootstrap(angular.element(first), ["mainApp"]);
   
   //Do manually bootstrap the second app, because by default, angular will only
   //bootstrap the first app that appear in the view.
   var second = document.getElementById("second");
   angular.bootstrap(angular.element(second), ["empApp"]);
