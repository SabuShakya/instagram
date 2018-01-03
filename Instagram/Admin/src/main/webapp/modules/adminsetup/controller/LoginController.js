(function () {
    angular.module("adminModule").controller("LoginController",LoginController);

    LoginController.$inject= ['$http','$location'];
    function LoginController($http,$location) {
        var vm= this;
        vm.userId = '';
        vm.password = '';
        vm.errormsg = '';
        vm.valid = true;
        vm.url = "http://localhost/login/"+userId;
        vm.loginUser = function(){
            $http.get(url)
                .then(function(response){
                    $location.path("/viewExistingAdmin");
                },function (error) {
                    vm.valid = false;
                    vm.errormsg = error;
                    console.log("error occurred"+error);
                })
        }
    }
})();