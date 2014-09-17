movieApp.controller('sideBarCtrl',['$scope','Categories', function($scope, Categories){
	$scope.test = "this is angular's power";
	$scope.categories = Categories.allCategories;
}]);

movieApp.controller('MainCtrl',['$scope', 'Api', function($scope, Api){
	$scope.query = "";
	$scope.movies = [];
	$scope.movie = {};
	$scope.searchMovie = function(){
		Api.MDB.searchMovie({query: $scope.query},
			function(response){
				if(response.results.length > 1){
					// This means there are more than one item that matches the query
					$scope.movies = response.results;
					jQuery("#results").modal('show');
				}else{
					$scope.movie = response.results[0];
				}
			}, 
			function(){

			});
	};
	$scope.setMovie = function(movie){
		$scope.movie = movie;
	};
}]);
movieApp.controller('ErrorCtrl',['$scope', function($scope){
}]);