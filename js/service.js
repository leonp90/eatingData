angular.module('myApp')
	.factory('foodService', function($http)	{
		
		function getRandom(){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/recipe");
		}
		
		function getNavSearch(foodQuery){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/recipe?q=" + foodQuery )
		}

		return {
			getRandom: getRandom,
			getNavSearch: getNavSearch
		}

	})
