angular.module('myApp')
	.controller('homeController', function($scope, foodService){
			$scope.getRandom=function(){
				foodService.getRandom()
					.then(function(response){
						console.log(response);
				})
		}
		$scope.getRandom();
})

	.controller('searchController', function($scope,$rootScope,foodService){
		$scope.getRecipe=function(e){
			e.preventDefault();
			foodService.getNavSearch($scope.foodQuery)
			.then(function (response){
				console.log(response.data);

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