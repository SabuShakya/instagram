(function () {
    angular.module('adminModule',['ngRoute']);
    angular.module('adminModule').config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when("/",{
            controller:'LoginController as login',
            templateUrl:'/modules/views/loginPage.jsp'
            })
            .when("/signup",{
                controller:'SignupController as signup',
                templateUrl:'/modules/views/signupPage.jsp'
            })
            .when("/edit",{
                controller :'EditController as edit',
                templateUrl:'/modules/views/editPage.jsp'
            })
            .when("/viewExistingAdmin",{
                controller:"ManageAdmin as manage",
                templateUrl:'/modules/views/adminPage.jsp'
            })
            .otherwise({
                redirectTo:'/'
            })
    }]);
})();