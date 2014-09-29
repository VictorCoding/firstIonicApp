(function() {
	angular.module('eliteApp').controller('StandingsCtrl', ['eliteApi', StandingsCtrl]);

	function StandingsCtrl(eliteApi){
		var vm = this;

		eliteApi.getLeagueData().then(function() {

		vm.standings = data.standings;
		});
	}
})();