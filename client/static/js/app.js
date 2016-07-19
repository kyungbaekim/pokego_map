var	myAppModule = angular.module('myApp', ['ngRoute', 'angularMoment', 'ngMap']);
myAppModule.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: 'static/partials/tweets.html'
		// })
		// .otherwise({
		// 	redirectTo: '/'
		});
});
