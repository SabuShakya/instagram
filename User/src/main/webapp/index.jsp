<html ng-app='userModule'>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="angular-route.min.js"></script>
    <script type="text/javascript" src="angular-base64-upload.js"></script>

    <script type="text/javascript" src="app.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></script>

</head>
<body>

<div ng-view></div>

<script src="static/js/controller/SignupController.js"> </script>
<script src="static/js/controller/LoginController.js"> </script>
<script src="static/js/controller/MainController.js"> </script>
<script src="static/js/controller/ImgUploadController.js"> </script>


<script src="static/js/service/HttpService.js"> </script>
<script src="static/js/service/SignupService.js"> </script>
<script src="static/js/service/LoginService.js"> </script>

</body>
</html>