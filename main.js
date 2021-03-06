// main.js
// create the module and name it app
var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "mainController"
        })
        .when("/services", {
            templateUrl: "services.html",
            controller: "servicesController"
        })
        .when("/careers", {
            templateUrl: "careers.html",
            controller: "clientsController"
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "contact.html",
            controller: "contactController"
        })

    //$locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
app.controller("mainController", function ($scope) {
    // create a message to display in our view
    $scope.message = "test only!";
});

app.controller("servicesController", function ($scope) {
    // create a message to display in our view
    $scope.message = "services only!";
});

app.controller("clientsController", function ($scope) {
    // create a message to display in our view
    $scope.message = "clients only!";
});

app.controller("aboutController", function ($scope) {
    // create a message to display in our view
    $scope.message = "about only!";
});

app.controller("contactController", function ($scope) {
    // create a message to display in our view
    $scope.message = "contact us only!";
});