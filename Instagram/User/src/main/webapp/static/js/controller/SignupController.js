(function(){
    angular.module('userModule').controller('SignupController',SignupController);
    SignupController.$inject =['SignupService'];
    function SignupController(SignupService){
        var vm=this;
            vm.id='null';
            vm.firstName='';
            vm.lastName='';
            vm.uname='';
            vm.email='';
            vm.password='';

        vm.url="/signup";
        vm.createUser = function createUser() {
            SignupService.createUser(vm.url);
            // .then(
            //     function (value) {
            //
            //     }
            // )
        }

        // fetchAllUsers();
        //
        // function fetchAllUsers(){
        //     UserService.fetchAllUsers()
        //         .then(
        //             function(d) {
        //                 vm.users = d;
        //             },
        //             function(errResponse){
        //                 console.error('Error while fetching Users');
        //             }
        //         );
        // }
        //
        // function createUser(user){
        //     UserService.createUser(user)
        //         .then(
        //             fetchAllUsers,
        //             function(errResponse){
        //                 console.error('Error while creating User');
        //             }
        //         );
        // }
        //
        // function submit() {
        //     if(vm.user.id===null){
        //         console.log('Saving New User', vm.user);
        //         createUser(vm.user);
        //     }
        //     console.log("saved");
        // }
    }
})();



