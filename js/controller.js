angular.module('myApp')
.controller('homeController', function($scope, foodService){
        var random = Math.floor(Math.random() * (30 - 1) + 1);
            $scope.getRandom=function(){
                //debugger;
                foodService.getRandom()
                    .then(function(response){
                        $scope.recipeTitle = response.data[random].title;
                        $scope.recipeImg = response.data[random].image_url;
                        console.log(random);
                        console.log(response.data);
                        
                });
        };
        $scope.getRandom();
        $scope.getID = function(){
				foodService.getDescription($scope.recipeID)
				.then(function(response){
					console.log(response);
				});
		};
})
// 	var random = Math.floor(Math.random() * (30 - 1) + 1);
// 	$scope.getRandom=function(){


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

<<<<<<< HEAD
	})


=======
>>>>>>> bc6cc74d592009e4ae9baa5e7dbac142931c38ab
	// .controller('aboutController', function($scope){

	// })
	// .controller('contactController', function($scope){
		
	// })
	// .controller('contactController', function($scope){
		

	// })
	// 	
	// 	}
	// })