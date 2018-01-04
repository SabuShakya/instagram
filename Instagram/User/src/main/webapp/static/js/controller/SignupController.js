(function(){
<<<<<<< HEAD
    angular.module('userModule').controller('SignupController',SignupController);
    SignupController.$inject =['SignupService','$scope'];
    function SignupController(SignupService,$scope){
=======
    angular.module('myApp').controller('SignupController',SignupController);
    SignupController.$inject =['$scope','UserService'];
    function SignupController($scope, UserService){
        var vm=this;
        vm.user ={id:'',firstName:'', lastName:'', uname:'', email:'',password:''};
        vm.users =[];
        vm.submit= submit;

        fetchAllUsers();

        function fetchAllUsers(){
            UserService.fetchAllUsers()
                .then(
                    function(d) {
                        vm.users = d;
                    },
                    function(errResponse){
                        console.error('Error while fetching Users');
                    }
                );
        }
>>>>>>> ccd864bdf133c141c5f3f506d321c682dbdbea6e

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

        vm.createUser = function createUser() {
            vm.data ={
                id: vm.id,
                firstName: vm.firstName,
                lastName: vm.lastName,
                uname: vm.uname,
                email: vm.email,
                password: vm.password
            }
            SignupService.createUser(vm.url,vm.data);
        }
    }
})();



