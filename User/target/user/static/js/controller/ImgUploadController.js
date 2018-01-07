(function() {
    angular.module('userModule').controller('ImgUploadController', ImgUploadController);

    ImgUploadController.$inject=[];

    function ImgUploadController () {
        var vm= this;
        vm.imageName = [];
    }
})();