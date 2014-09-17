var movieApp = angular.module('movieApp', ['ngRoute','ngResource']);

function routeConfig($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'MainCtrl',
		templateUrl: "views/main.html"
	})
	.when('/movie', {
		controller: 'MovieCtrl',
		templateUrl: "views/movie.html"
	})
	.when('/actor', {
		controller: 'ActorCtrl',
		templateUrl: "views/actor.html"
	})
	.otherwise({
		controller: 'ErrorCtrl',
		templateUrl: "views/error.html"
	});
}

movieApp.config(routeConfig);