(function () {

angular.module('userModule').factory('HttpService', HttpService)
    HttpService.$inject =['$http', '$q'];
    function HttpService($http, $q) {

        var REST_SERVICE_URI= "http://localhost:8080/#";

        var factory={
            get: get,
            post: post
        };
        return factory;

        function get(url) {
            var defered = $q.defer();
            $http.get(REST_SERVICE_URI+url)
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

        function post(url) {
            var defered = $q.defer();
            $http.post(REST_SERVICE_URI+url)
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