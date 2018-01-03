'use strict';

(function(){
angular.module('myApp',['ngRoute']);

angular.module('myApp').config(function($routeProvider) {
    $routeProvider
        .when("/login",{
            templateUrl:"/WEB-INF/views/login.jsp",
            controller: "LoginController"
        })
        .when("/signup",{
            templateUrl:"static/views/signup.jsp",
            controller:"SignupController"
        })
        .otherwise({
            redirectTo:'/'});

})
})();