   // 1. Define the first app.
   var app = angular.module("mainApp", []);
   
   app.controller("test", function($scope){
    $scope.Hola = {};
	$scope.Hola.fn = "jon";
	$scope.Hola.ln = "doe";
   });
   
   app.config(["$routeProvider", function($routeProvider){
	   $routeProvider.
	   when("/link1", {
		   templateUrl: "link1.html",
		   controller: "Link1"
	   }).
	   when("/link2", {
		   templateUrl: "link2.html",
		   controller: "Link2"
	   }).
	   when("/link3", {
		   templateUrl: "link3.html",
		   controller: "Link3"
	   });
   }]   
   );
   
   // 2. Define the second app.
   var emp = angular.module("empApp", []);
   
   emp.controller("employee", function ($scope){
	$scope.employee = {
	   firstName: "Matt",
	   lastName: "Kidder",
	   fullName: function(){
		   //var obj; 
		   //obj = $scope.employee;
		   return this.firstName + " " + this.lastName;		   
	   },
	   skills: [
	    {name: "C#", strength: 10},
	    {name: "JavaScript", strength: 6},
	    {name: "VB", strength: 1},
	    {name: "jQuery", strength: 2},
		{name: "T-SQL", strength: 5},
		{name: "UI Design", strength: 8}
	   ]
	};   
   });
   
   //Angular will always bootstrap the first app defined in the view. 
   //In this case, mainApp is already bootstrapped. So, do NOT manually
   //bootstrap it, or else exception will occur.   
   //var first = document.getElementById("first");   
   //angular.bootstrap(angular.element(first), ["mainApp"]);
   
   //Do manually bootstrap the second app, because by default, angular will only
   //bootstrap the first app that appear in the view.
   var second = document.getElementById("second");
   angular.bootstrap(angular.element(second), ["empApp"]);
