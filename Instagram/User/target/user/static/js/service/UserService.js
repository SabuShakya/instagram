(function () {

angular.module('myApp').factory('UserService', UserService)
    UserService.$inject =['$http', '$q'];
    function UserService($http, $q) {

        var REST_SERVICE_URI= "http://localhost:8080/";

        var factory={
            fetchAllUsers: fetchAllUsers,
            createUser: createUser
        };
        return factory;

        function fetchAllUsers() {
            var defered = $q.defer();
            $http.get(REST_SERVICE_URI)
                .then(
                    function (response) {
                        defered.resolve(response.data);
                    },
                    function (error) {
                        console.log("Error occured");
                        defered.reject(error);
                    }
                );
            return defered.promise;
        }

        function createUser(user) {
            var defered = $q.defer();
            $http.post(REST_SERVICE_URI,user)
                .then(
                    function (response) {
                        defered.resolve(response.data);
                    },
                    function (error) {
                        console.log("Error occured");
                        defered.reject(error);
                    }
                );
            return defered.promise;
        }
    }
})()