(function () {
    angular.module('adminModule',['ngRoute']);
    angular.module('adminModule').config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when("/login",{
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
            .when("/adminPage",{
                controller:"AdminpageController as admin",
                templateUrl:'/modules/views/adminPage.jsp'
            })
            // .when("/viewExistingAdmin",{
            //     controller:"AdminpageController as manage",
            //     templateUrl:'/modules/views/existingUsers.jsp'
            // })
            .when("/addAdmin",{
                controller:"NewAdminController as newadmin",
                templateUrl:'/modules/views/addNewAdmin.jsp'
            })
            .otherwise({
                redirectTo:'/login'
            })
    }]);
})();