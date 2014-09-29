(function() {
	'use strict';

	angular.module('eliteApp').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);

	function LocationsCtrl(eliteApi){
		var vm = this;

		eliteApi.getLeagueData().then(function(){
		vm.locations = data;
	
	});
	}

})();