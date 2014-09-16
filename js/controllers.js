movieApp.controller('sideBarCtrl',['$scope','Categories', function($scope, Categories){
	$scope.test = "this is angular's power";
	$scope.categories = Categories.allCategories;
}]);

movieApp.controller('MainCtrl',['$scope', function($scope){
}]);
movieApp.controller('ErrorCtrl',['$scope', function($scope){
}]);