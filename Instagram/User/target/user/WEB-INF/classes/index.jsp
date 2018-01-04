<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html ng-app="userModule">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-route.js"></script>

    <script type="text/javascript" src="app.js"></script>

    <script src="<c:url value='static/js/controller/SignupController.js'/>"></script>
    <script src="<c:url value='static/js/service/HttpService.js'/>"></script>
    <script src="<c:url value='static/js/service/SignupService.js'/>"></script>

</head>
<body>

<h2>REGISTRATION PAGE</h2>

<div ng-view></div>

</body>
</html>