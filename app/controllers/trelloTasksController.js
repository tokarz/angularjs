angular.module('app.controllers').controller('trelloTasksController', function ($scope) {
    $scope.tasks = [
        { title: 'someTitle', user: 'Michal', id: '1' },
        { title: 'someTitle2', user: 'Maciek', id: '2' },
        { title: 'someTitle3', user: 'Ola', id: '3' }
    ];

    $scope.checkStatus = function (task) {
       if(task % 2 === 0) {
           return 'dupa';
       } else {
           return 'cycki';
       }

    }

})