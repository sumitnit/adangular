myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'views/first-view.html',
		controller : 'myController',
		controllerAs: 'abc'
	})
	.when('/:nameid',{
		templateUrl : 'views/second-view.html',
		controller : 'myController1',
		controllerAs: 'abc1'
	})
	.otherwise(
	{
		template : '<h1>404 page not found</h1>'
	});
}]);