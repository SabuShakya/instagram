(function(){
    angular.module('userModule').controller('SignupController',SignupController);
    SignupController.$inject =['SignupService'];
    function SignupController(SignupService){

        var vm=this;
            vm.user ={
                'id': 'null',
                'firstName':'',
                'lastName':'',
                'uname':'',
                'email':'',
                'password':''
            };

        vm.url="/signup";
        vm.createUser= createUser;

        function createUser() {
            vm.newUser ={
                'id': vm.id,
                'firstName': vm.firstName,
                'lastName': vm.lastName,
                'uname': vm.uname,
                'email': vm.email,
                'password': vm.password
            }
            SignupService.createUser(vm.url,vm.newUser);
        }
    }
})();



