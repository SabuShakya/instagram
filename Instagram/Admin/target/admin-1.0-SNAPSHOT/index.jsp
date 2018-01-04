<%@page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html ng-app="adminModule">
<head>
    <meta charset="utf-8">
    <title>Welcome</title>

    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <%--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js"></script>--%>
    <%--<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-route.min.js"></script>--%>
    <script type="text/javascript" src="static/angular.min.js"></script>
    <script type="text/javascript" src="static/angular-route.min.js"></script>
    <script type="text/javascript" src="app-module.js"></script>



</head>
<body>
<h1>Welcome</h1>

<div>
<ng-view></ng-view>
</div>

</body>

<script type="text/javascript" src="modules/adminsetup/controller/MainController.js"></script>
<script type="text/javascript" src="modules/adminsetup/controller/LoginController.js"></script>
<script type="text/javascript" src="modules/adminsetup/controller/SignupController.js"></script>
<script type="text/javascript" src="modules/adminsetup/service/LoginService.js"></script>
<script type="text/javascript" src="modules/adminsetup/service/SignupService.js"></script>
<script type="text/javascript" src="modules/adminsetup/service/HttpService.js"></script>
</html>
