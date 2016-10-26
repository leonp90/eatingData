angular.module('myApp')
.controller('homeController', function($scope, foodService){
	var random = Math.floor(Math.random() * (30 - 1) + 1);
	var recipeID= "";
	foodService.getRandom()
	.then(function(response){
		$scope.recipeTitle = response.data[random].title;
		$scope.recipeImg = response.data[random].image_url;
		recipeID += response.data[random].url_details;
		$scope.getID();
	});


	$scope.getID = function() {
		// console.log(recipeID);	
		foodService.getDescription(recipeID)
		.then(function(response){

			// console.log(response.data.recipe.description_text);
		});
	}



})

.controller('searchController', function($scope,$rootScope,foodService, $location){
	var idResults=[];
	$scope.getRecipe=function(e){
		e.preventDefault();
		foodService.getNavSearch($scope.foodQuery)
		.then(function (response){
			console.log(response);
			$rootScope.recipes=response.data;
			console.log(response);
			console.log($rootScope.recipes)
		})
		$location.path("/search")
	}
	// $scope.url_details=function(e){
	// 	console.log("dafdsfa")
	// 	e.preventDefault();
	// 	foodService.getDescription($rootScope.recipeID)
	// 	.then(function (response){
	// 		console.log(response);
	// 	});

	// }
})

// .controller('searchResults', function($scope,$rootScope,foodService){
	
// 	}
// })

