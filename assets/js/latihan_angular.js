var viewTest = angular.module('viewTest', []);

viewTest.controller('CobaController', function($scope){
	$scope.daftarNama = [
		'Athallah',
		'Tsany',
		'Rakha',
		'Dzaky'
	];

	$scope.tambahNama = function(){
		$scope.daftarNama.push($scope.nama);
		$scope.nama = "";
	}

	$scope.deleteNama = function(x){
		var indeks = $scope.daftarNama.indexOf(x);
		if (indeks > -1) {
			$scope.daftarNama.splice(indeks, 1);
		}
	}
})