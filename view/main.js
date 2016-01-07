var app=angular.module("mainModule",["dynamicFieldModule"]);


//Creating a specific controller for html
app.controller("mainController",function($scope){
	//Initializing a scope object to store the values entered
	$scope.modelData={};
});