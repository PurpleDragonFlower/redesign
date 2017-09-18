var app = angular.module('FilingCtrl', [])

app.controller('FilingController',
		function($scope, $rootScope){
			var button = document.getElementById('btn-single');
			button.addEventListener('click', function(e){
				$rootScope.filing = "Single";
				button.href = "/finalize"
			});
			var button1 = document.getElementById('btn-joint');
			button1.addEventListener('click', function(e){
				$rootScope.filing = "Married filing jointly (even if one one had income)";
				button1.href = "/finalize"
			});
			var button2 = document.getElementById('btn-separate');
			button2.addEventListener('click', function(e){
				$rootScope.filing = "Married filing separately";
				button2.href = "/finalize"
			});
			var button3 = document.getElementById('btn-head');
			button3.addEventListener('click', function(e){
				$rootScope.filing = "Head of household (with qualifying person)";
				button3.href = "/finalize"
			});
			var button4 = document.getElementById('btn-widow');
			button4.addEventListener('click', function(e){
				$rootScope.filing = "Qualifying window(er) with dependent child";
				button4.href = "/finalize"
			});

		});