
<form name="myForm" class="form-horizontal" novalidate>
    <div class="form-group">
        <label class="control-label col-sm-2" for="userId">UserId:</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" ng-model="login.userId" id="userId"
                   placeholder="Enter user id" name="userId" required/><br>
            <span style="color:red" ng-show="myForm.userId.$dirty && myForm.userId.$invalid">
        <span ng-show="myForm.userId.$error.required">UserId is required.</span>
      </span>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-sm-2" for="pwd">Password:</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="pwd" ng-model="login.password"
                   placeholder="Enter password" name="password" required/><br>
            <span style="color:red" ng-show="myForm.pwd.$dirty && myForm.pwd.$invalid">
        <span ng-show="myForm.pwd.$error.required">Password required</span>
      </span>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-default" ng-disabled="myForm.$invalid" ng-click="login.loginUser();">Login</button>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-default" ng-click="login.signup();">Signup</button>
        </div>
    </div>
    <div ng-hide ="login.valid">
        <span style="color:red">{{login.errormsg}}</span>
    </div>

</form>