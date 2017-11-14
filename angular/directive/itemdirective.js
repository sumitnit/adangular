myApp.directive('itemView',function(){
	
	return{
		restrict: 'E',
		templateUrl : 'directive/itemView-directive.html'
	};
});//Directive to return Item


myApp.directive('characterView',function(){
	
	return{
		restrict: 'E',
		templateUrl : 'directive/characterView-directive.html'
	};
});//Directive to return Character

myApp.directive('houseView',function(){
	
	return{
		restrict: 'E',
		templateUrl : 'directive/houseView-directive.html'
	};
});//Directive to return House