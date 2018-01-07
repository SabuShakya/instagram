<form name="signupform" novalidate>
    <div class="container">
        <p>
            FirstName:
            <input type="text" name="firstName" ng-model="signup.firstName" placeholder="First name" required/>
            <div ng-show="signupform.firstName.$dirty && signupform.firstName.$invalid">
            <span class="error" ng-show="signupform.firstName.$error.required"> First name is required</span>
            </div>
        </p>

        <p>
            LastName:
            <input type="text" name="lastName" ng-model="signup.lastName" placeholder="Last name" required/>
            <div ng-show="signupform.lastName.$dirty && signupform.lastName.$invalid">
            <span class="error" ng-show="signupform.lastName.$error.required"> Last name is required</span>
            </div>
        </p>

        <p>
            Username:
            <input type="text" name="uname" ng-model="signup.uname" placeholder="Username" required/>
        <div ng-show="signupform.uname.$dirty && signupform.uname.$invalid">
            <span class="error" ng-show="signupform.uname.$error.required"> Username is required</span>
        </div>
        </p>

        <p>
            Email:
            <input type="text" name="email" ng-model="signup.email" placeholder="Email ID" required/>
            <div ng-show="signupform.email.$dirty && signupform.email.$invalid">
            <span class="error" ng-show="signupform.email.$error.required"> Email is required</span>
            <span class="error" ng-show="signupform.email.$error.email">Enter a valid email</span>
            </div>
        </p>

        <p>
            Password:
            <input type="password" name="pass" ng-model="signup.password" placeholder="Password" required/>
            <div ng-show="signupform.pass.$dirty && signupform.pass.$invalid">
            <span class="error" ng-show="signupform.pass.$error.required"> Password is required</span>
            </div>
        </p>
    </div>

    <button type="submit" ng-click="signup.createUser()">
        Submit form
    </button>

</form>

<style>
    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
    }
    input[type=email], input[type="password"]{
        box-sizing: border-box;
        width: 100%;
        padding: 12px;
    }
</style>
