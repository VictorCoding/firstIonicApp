(function(){
	'use strict';

	angular.module('eliteApp').controller('GameCtrl', ['eliteApi', '$stateParams',  GameCtrl]);

	function GameCtrl($stateParams, eliteApi){
		eliteApi.getLeagueData().then(function(data){
			vm.game = _.find(data.games, { "id": gameId})
		});
	};

})();