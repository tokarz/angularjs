//1 pobieramy modul ktory musi byc juz zdefiniowany w app.js - angular.module('app.controllers')
//2 dodajemy do niego nowy kontroler o nazwie firstController i implementacji - function($scope, $interval,  kidsService)
//3 function($scope, $interval,  kidsService) - to sa zaleznosci wstrzykiwane przez DI
angular.module('app.controllers').controller('firstController', function($scope, $interval,  kidsService) {

    $scope.name = "Michal";
    $scope.kids = kidsService.getKids();

    $scope.isEnabled = true;

    $scope.toggleEnabled = function() {
        $scope.isEnabled = !$scope.isEnabled;
    }

});


   