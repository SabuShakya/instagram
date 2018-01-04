(function () {
    angular.module("adminModule").service("SignupService", SignupService);

    SignupService.$inject = ['HttpService','$location'];

    function SignupService(HttpService,$location) {
        var vm = this;
        vm.saveAdmin = saveAdmin;

        function saveAdmin(url) {
            HttpService.post(url).then(function (value) {
                if(value == true){
                    $location.path("/login");
                }else{
                    return "some error occurred tryAgain";
                }
            },function (reason) {
                console.log("error"+reason);
            })
        }
    }
})();