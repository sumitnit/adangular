myApp.controller('myController',['myService','ArrService',function(myService,ArrService){

	var main=this;
	this.allitems=[];
	this.number=0;	
	this.getNumber = function(num) {
		return new Array(num);
	} 
	//this.int=['abc','cde','dfd'];
	
	myService.allbooks().then(function successCallback(response){
		main.allitems.push(response.data);
		main.number=main.allitems[0].length;
	},
	function errorCallback(response)
	{
		console.log('error');
	});// Call Service to get all books

	myService.allcharacters().then(function successCallback(response){
		main.allitems.push(response.data);
	},
	function errorCallback(response)
	{
		console.log('error');
	});// Call Service to get all characters

	myService.allhouses().then(function successCallback(response){
		main.allitems.push(response.data);
	},
	function errorCallback(response)
	{
		console.log('error');
	})//// Call Service to get all houses

	.then(function AddToService(){  
		ArrService.setArr(main.allitems);
	});
}])


myApp.controller('myController1',['ArrService','$routeParams',
function(ArrService,$routeParams){
var main=this;
this.allitems=ArrService.getArr();
//console.log(this.allitems);
this.currObj=null;
this.nameid=$routeParams.nameid;
for (var i = 0; i < this.allitems.length; i++) {
	for (var j = 0; j <this.allitems[i].length ; j++) {
		if (this.allitems[i][j].name===main.nameid) {
			this.currObj=this.allitems[i][j];
			console.log(this.currObj);
			console.log(this.currObj.name);
		}
		
	}
	
}
}])