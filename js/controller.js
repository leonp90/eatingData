angular.module('myApp')
	.controller('homeController', function($scope){

	})
	.controller('aboutController', function($scope){

	})
	.controller('contactController', function($scope){
		
	})
	.controller('contactController', function($scope){
		
	})
	.controller('searchController', function($scope,$rootScope,foodService){
		$scope.getRecipe = function(e){
		e.preventDefault();
		foodService.getNavSearch($scope.foodQuery)
			.then(function(response){
				console.log(response);
			})
		}
		
	})
	.controller('randomController', function($scope){
		$scope.getRandom=function(){
			foodService.getRandom()
				.then(function(response){
					console.log(response);
				})
		}
	})