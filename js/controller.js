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
        	console.log(recipeID);	
			foodService.getDescription(recipeID)
				.then(function(response){
					console.log(response.data.recipe.description_text);
				});
		}


		
})


	.controller('searchController', function($scope,$rootScope,foodService){
		$scope.title = "AAAA"
		$scope.getRecipe=function(e){
			e.preventDefault();
			foodService.getNavSearch($scope.foodQuery)
				.then(function (response){
					console.log(response);
					$scope.recipes=response.data;
					console.log($scope.recipes);

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