angular.module('myApp')
	.controller('homeController', function($scope, foodService){
			$scope.getRandom=function(){
				var random = Math.floor(Math.random() * (30 - 1) + 1);
				foodService.getRandom()
					.then(function(response){
						$scope.recipeTitle = response.data[random].title
						$scope.recipeImg = response.data[random].image_url
						console.log(random);
						console.log(response.data);
				})
		}
		$scope.getRandom();
})

	.controller('searchController', function($scope,$rootScope,foodService){
		$scope.getRecipe=function(e){
			e.preventDefault();
			foodService.getNavSearch($scope.foodQuery)
			.then(function (response){
				// console.log(response.data);

			})

		}

	})
	// .controller('aboutController', function($scope){

	// })
	// .controller('contactController', function($scope){
		
	// })
	// .controller('contactController', function($scope){
		

	// })
	// 	
	// 	}
	// })