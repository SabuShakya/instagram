(function () {
    angular.module("adminModule").controller("AdminpageController",AdminpageController);
    
    AdminpageController.$inject = ['HttpService'];
    
    function AdminpageController(HttpService) {
        var vm  = this;
        vm.adminList = [];
        vm.showList = true;
        vm.url = "/getAllAdmins";

        vm.showAdminList = showAdminList;

        function showAdminList() {
            vm.adminList= HttpService.get(vm.url);
            vm.showList = false;
        }
        
    }
})();