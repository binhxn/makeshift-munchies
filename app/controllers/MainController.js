module.exports = function($scope, $http) {
	$scope.ingredient;
	$scope.error;
	$scope.recipes;

	//Filter options
	$scope.filterOptions = false;
	$scope.textFilter;
	$scope.numLimit;

	$scope.searchRecipe = function() {
	  var apiKey = "072f77aeeaa529fd84dc94532a4e2ea1";
	  var ingredient = $scope.ingredient;
	  var url = "http://food2fork.com/api/search?key="
	        + apiKey
	        + "&q=" + ingredient;

	  $http.get(url).then(
	    function (response) {
	      if (response.data.recipes.length === 0) {
	        $scope.error = "Sorry, we don't have any recipes for '" + ingredient + "'";
	        $scope.searchedIngredient = null;
	        $scope.recipes = null;
	      } else {
	        $scope.searchedIngredient = "Results for '" + $scope.ingredient + "'";
	        $scope.recipes = response.data.recipes;
	        $scope.error = null;
	      }
	    }
	  );
	}

	$scope.clearSearch = function() {
	  $scope.ingredient = "";
	}

	$scope.clearFilter = function() {
	  $scope.textFilter = "";
	}
}