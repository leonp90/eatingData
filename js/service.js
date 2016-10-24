angular.module('myApp')
	.factory('foodService', function($http)	{
		
		function getRandom(){
			return $http.get("http://food2fork.com/api/search?key=a6b99a4152486ca85ac5a86da8d607a2");
		}
		function getNavSearch(query){
			return $http.get("http://food2fork.com/api/search?key=a6b99a4152486ca85ac5a86da8d607a2&q=" + query );
		}
		return {
			getRandom: getRandom
		}
	})
