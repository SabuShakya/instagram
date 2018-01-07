(function () {
    angular.module("adminModule").controller("AdminpageController",AdminpageController);
    
    AdminpageController.$inject = ['HttpService','$uibModal','$rootScope'];
    
    function AdminpageController(HttpService,$uibModal,$rootScope) {
        var vm  = this;
        vm.adminList = [];
        vm.showList = true;
        vm.url = "/getAllAdmins";
        $rootScope.clickedAdmin = '';
        $rootScope.message = '';
        $rootScope.saved = false;
        vm.showAdminList = showAdminList;
        vm.deleteAdmin = deleteAdmin;
        vm.openEditModal =  openEditModal;

        function showAdminList() {
            HttpService.get(vm.url).then(function (value) {
                vm.adminList = value;
                vm.showList = false;
            },function (reason) {
                console.log("Something occurred"+reason);
            });
        }

        function deleteAdmin(admin) {
            vm.url = "/delete";
            HttpService.post(url,admin).then(function (value) {

            },function (reason) {

            });
        }

        function openEditModal(admin) {
            $rootScope.clickedAdmin = admin;
            vm.modalInstance = $uibModal.open({
                ariaLabelledBy : 'modal-title',
                ariaDescribedBy : 'modal-body',
                templateUrl: '/modules/views/editModal.jsp',
                controller:'EditModalController',
                controllerAs:'modalController',
                size : 'lg'
            });
        }
    }
})();