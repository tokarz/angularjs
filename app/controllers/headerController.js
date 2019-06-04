angular.module('app.controllers').controller('headerController', function($scope) {


    $scope.menuOpts = [
        {
            name: 'Kontakt',
            action: function() {alert('Kontakt')}
        },
        {
            name: 'Tablice',
            action: function() {alert('Tablice')}
        },
        {
            name: 'AboutUs',
            action: function() {alert('AboutUs')}
        }


    ];

})