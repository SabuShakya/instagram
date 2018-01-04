(function(){
angular.module('userModule',['ngRoute']);

angular.module('userModule').config(function($routeProvider) {
    $routeProvider
        .when("/login",{
            templateUrl:"static/views/login.jsp",
            controller: "LoginController"
        })
        .when("/signup",{
            templateUrl:"/static/views/signup.jsp",
            controller:"SignupController as form"
        })
        .otherwise({
            redirectTo:'/'
        });

})
})();