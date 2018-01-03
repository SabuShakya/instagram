
(function(){
    angular.module('myApp').controller('SignupController',SignupController);
    SignupController.$inject =['$scope','UserService'];
    function SignupController($scope, UserService){
        var vm=this;
        vm.user ={id:'null',firstName:'', lastName:'', uname:'', email:'',password:''};
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

        function createUser(user){
            UserService.createUser(user)
                .then(
                    fetchAllUsers,
                    function(errResponse){
                        console.error('Error while creating User');
                    }
                );
        }

        function submit() {
            if(vm.user.id===null){
                console.log('Saving New User', vm.user);
                createUser(vm.user);
            }
            reset();
        }

        function reset(){
            vm.user={id:null,firstName:'',lastName:'',uname:'',email:'',password:''};
            $scope.signupform.$setPristine();
        }
    }
})();



