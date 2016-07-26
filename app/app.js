require('angular')
var MainController = require('./controllers/MainController')

angular.module('app', [
	require('angular-route'),
	require('angular-animate')
	])
	.controller('MainController', ['$scope', '$http', MainController])
	// .directive('recipeList', recipeList)
 //  .directive('filterOptions', filterOptions)
 //  .directive('searchIngredients', searchIngredients);

// function recipeList() {
//   return {
//     restrict: 'E',
//     templateUrl: '../app/directives/recipe-list.html'
//   }
// }

// function filterOptions() {
//   return {
//     restrict: 'E',
//     templateUrl: '../app/directives/filter-options.html'
//   }
// }

// function searchIngredients() {
//   return {
//     restrict: 'E',
//     templateUrl: '../app/directives/search-ingredients.html'
//   }
// }