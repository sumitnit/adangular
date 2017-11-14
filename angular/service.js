myApp.service('myService',['$http',function($http){

	this.allbooks= function(){
		return $http({
			method: 'GET',
			url : 'https://anapioficeandfire.com/api/books?page=1&pageSize=12'
		})
	},
	this.allcharacters= function(){
		return $http({
			method: 'GET',
			url : 'https://anapioficeandfire.com/api/characters?page=2&pageSize=12'
		})
	},
	this.allhouses= function(){
		return $http({
			method: 'GET',
			url : 'https://anapioficeandfire.com/api/houses?page=1&pageSize=12'
		})
	}
}])//Service to get all data


myApp.service('ArrService',function(){
	var Arr = [];
	return {
		getArr: function () {
			return Arr;
		},
		setArr: function (value1) {
			Arr = value1;
		}
	}
})