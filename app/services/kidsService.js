angular.module('app.services').service('kidsService', function ($http) {
    return {
        getKids: function () {
            return ['Kids from service'];
        },
        getKidsFromBE: function () {
            const headers = {
               'Access-Control-Allow-Origin': true,
               'Content-Type': 'application/json; charset=utf-8',
               "X-Requested-With": "XMLHttpRequest"
                 }

            const url = 'D:/workspace/szkolenia/angularjs/app/kids.json';
            return $http.get(url, {}, headers);
        }
    };
});