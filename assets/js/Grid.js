angular.module('OpenAddressesExplorer', ['trNgGrid']).
controller('GridController', function ($scope, $http) {
	$scope.sources = [];

	$http.get('/data/sources.json').
		success(function(data, status) {
			$scope.sources = data;
		}).
		error(function(data, status) {
			alert('Could not load sources');
		});
});