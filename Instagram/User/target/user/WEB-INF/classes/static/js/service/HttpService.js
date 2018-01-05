(function () {

angular.module('userModule').service('HttpService', HttpService)
    HttpService.$inject =['$http', '$q'];
    function HttpService($http, $q) {

        var vm= this;
        vm. REST_SERVICE_URI= "http://localhost:8080";

        return{
            get: get,
            post: post,
            postLogin:postLogin
        };

        function get(url) {
            var defered = $q.defer();
            $http.get(vm.REST_SERVICE_URI+url)
                .then(
                    function (response) {
                        defered.resolve(response.data);
                    },
                    function (error) {
                        console.log("Error occured");
                        defered.reject(error.data);
                    }
                );
            return defered.promise;
        }

        function post(url,newUser) {
            var defered = $q.defer();
            $http.post(vm.REST_SERVICE_URI+url,newUser)
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

        function postLogin() {
            var defered = $q.defer();
            $http.post(vm.REST_SERVICE_URI+url)
                .then(
                    function (response) {
                        defered.resolve(response.data);
                    },
                    function (reason) {
                        defered.reject(error());
                    }
                );
            return defered.promise;
        }

    }
})()