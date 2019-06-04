//namespace MyCoolApp

// instalacja angulara :
//1 - npm init (same entery)
//2 - npm install angular --save-dev
//3 wpis <script src="angular.js" w pliku index.html

//1 angular.module('MyCoolApp' jest naszym globalnym modulem-matka
//2 angular.module('app.controllers', []) tworzy (!!) nowy modul ktory pozniej moze byc wykorzystywany w kontrolerach i serwisach
//angular.module('MyCoolApp', ['app.controllers', 'app.services']) - modul matka musi otrzymac informacje o swoich dzieciach w formie tablicy

angular.module('app.controllers', []); //set ()
angular.module('app.services', []); //set ()

const app = angular.module('MyCoolApp', ['app.controllers', 'app.services']);