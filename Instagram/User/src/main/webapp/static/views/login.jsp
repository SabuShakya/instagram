<html ng-app="userModule">
<head>
    <title> Login page</title>
</head>
<body>
<form name="loginform" ng-controller="LoginController as lform" novalidate>
    <div>
        <p>
            Username:
            <input type="text" name="uname" ng-model="lform.uname" placeholder="Username" required/>
            <div ng-show="loginform.uname.$dirty && loginform.uname.$invalid">
            <span class="error" ng-show="loginform.uname.$error.required"> Username is required</span>
            </div>
        </p>
        <p>
            Password:
            <input type="text" name="password" ng-model="lform.password" placeholder="Password" required/>
            <div ng-show="loginform.password.$dirty && loginform.password.$invalid">
            <span class="error" ng-show="loginform.login.$error.required"> Password is required</span>
        </div>
        </p>

        <button type="submit" value="Submit"></button>
    </div>
</form>
</body>
</html>