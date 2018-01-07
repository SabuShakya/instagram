(function () {
    angular.module("adminModule").controller("EditModalController",EditModalController);

    EditModalController.$inject = ['HttpService','$uibModalInstance','$rootScope'];
    function EditModalController(HttpService,$uibModalInstance,$rootScope) {
        var vm =  this;
        vm.admin = $rootScope.clickedAdmin;
        vm.url = "/update";
        vm.cancel = cancel;
        vm.update = update;
        vm.deleteAdmin = deleteAdmin;

        function update() {
            HttpService.post("/update",vm.admin).then(
                function (value) {
                   $rootScope.message = "Updated successfully";
                   $rootScope.saved = true;
                },function (reason) {
                    $rootScope.message = "Error Occurred";
                    $rootScope.saved = true;
                });
            $uibModalInstance.close('save');
        }

        function deleteAdmin() {
            HttpService.post("/delete",vm.admin).then(function (value) {
                $rootScope.message = "Deleted successfully";
                $rootScope.saved = true;
            },function (reason) {
                $rootScope.message = "Error Occurred";
                $rootScope.saved = true;
            });
            $uibModalInstance.close('save');
        }
        function cancel(){
            $uibModalInstance.dismiss('close');
        }
    }
})();