// angular.module('myApp').controller('UserController', UserController)
// UserController.$inject = ['$scope', '$resource'];
// function UserController($scope, $resource) {
//
//     function fetchAllUsers(){
//         $scope.users = $resource('http://localhost:8080/user')
//             .query(function (data) {
//                 return data;
//             });
//         fetchAllUsers();
//     }
//
//
//     $scope.signup= function(){
//         // var newuser ={
//         //     'firstName': $scope.firstName,
//         //     'lastName': $scope.lastName,
//         //
//         //
//         // }
//         User= $resource
//         {
//             "http://localhost:8080/signup",
//                 {save: {method:'POST', isArray: false}}
//         }
//
//         var user ={};
//         user.id = $scope.signupform.id;
//         user.firstName = $scope.signupform.firstName;
//         user.lastName= $scope.signupform.lastName;
//         user.email = $scope.signupform.email;
//         user.uname = $scope.signupform.uname;
//     }
//
// }