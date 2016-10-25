angular.module('myApp')
	.factory('foodService', function($http)	{
		
		function getRandom(){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/recipe");
		}
		
		function getDescription(recipeID){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/recipe" + repiceID);
		}

		function getNavSearch(foodQuery){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/recipe?q=" + foodQuery )
		}

		return {
			getRandom: getRandom,
			getDescription: getDescription,
			getNavSearch: getNavSearch
		}

	})
