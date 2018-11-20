'use strict';
angular.module('app').controller('searchCtrl',['$http','$scope',function($http,$scope){
	$http.get('data/positionList.json').success(function(resp){
		$scope.positionList = resp;
	});
}]);
