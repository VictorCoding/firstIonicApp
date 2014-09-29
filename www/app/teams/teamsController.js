(function() {
	'use strict';
	angular.module('eliteApp').controller('teamsCtrl', ['eliteApi', teamsCtrl]);

	function teamsCtrl(eliteApi){
		var vm = this;

		eliteApi.getLeagueData().then(function(data){
			vm.teams = data.teams;
		});
	};
})();