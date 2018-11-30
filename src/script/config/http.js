'use strict';
angular.module('app').config(['$provide',function($provide){
	$provide.decorator('$http',['$delegate','$q',function($delegate,$q){
		$delegate.post = function(url, data, config){
			var def = $q.defer();
			$delegate.get(url).success(function(resp){
				def.resolve(resp);
			}).error(function(err){
				def.reject(err);
			});
			return {
				success: function(value){
					def.promise.then(value);
				},
				error: function(value){
					def.promise.then(null, value);
				}
			}
		}
		return $delegate;
	}]);
}]);
