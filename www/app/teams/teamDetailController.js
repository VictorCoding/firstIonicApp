(function () {
	'use strict';

	angular.module('eliteApp').controller('teamDetailCtrl', ['eliteApi', '$stateParams', teamDetailCtrl]);

		function teamDetailCtrl(eliteApi, $stateParams){
			var vm = this;

			// console.log("$stateParams", $stateParams);
			vm.teamId = Number($stateParams.id);
			
			eliteApi.getLeagueData().then(function(){

			var team = _.chain(data.teams)
						.flatten("divisionTeams")
						.find({ "id": vm.teamId })
						.value();

			vm.teamName = team.name;

			vm.games = _.chain(data.games)
						.filter(isTeamInGame)
						.map(function (item) {
							var isTeam1 = (item.team1Id === vm.teamId ? true : false);
							var opponentName = isTeam1 ? item.team2 : item.team1;
							var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score);
							return {
								gameId: item.id,
								opponent: opponentName,
								time: item.time,
								location: item.location,
								locationUrl: item.locationUrl,
								scoreDisplay: scoreDisplay,
								homeAway: (isTeam1 ? "vs." : "at")
							};
						})
						.value();


			function isTeamInGame(item){
				return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
			}			

			function getScoreDisplay(isTeam1, team1Score, team2Score){
				if (team1Score && team2Score) {
					var teamScore = (isTeam1 ? team1Score : team2Score);
					var opponentScore = (isTeam1 ? team2Score : team1Score);
					var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
					return winIndicator + teamScore + "-" + opponentScore;
				}
				else {
					return "";
				}
			}
		});
	};

})();