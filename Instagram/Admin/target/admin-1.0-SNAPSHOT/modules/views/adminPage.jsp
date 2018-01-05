<h1>DashBoard</h1>
 <button><a href="/#!/addAdmin">Add New Admin</a></button>
 <button ng-show="admin.showList" ng-click="admin.showAdminList()">Manage Admins</button>

<div ng-hide="admin.showList">
    <h1> All users </h1>
    <div class="alert alert-success" ng-if="saved">
        <strong>{{admin.message}}</strong>
    </div>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>UserId</th>
            <th>Email</th>
            <th>Edit </th>
            <th>Delete </th>
        </tr>
        </thead>
        <tbody>
        <tr ng-repeat="ad in admin.adminList">
            <td>{{$index+1}}</td>
            <td>{{ad.name}}</td>
            <td>{{ad.userId}}</td>
            <td>{{ad.email}}</td>
            <td>
                <button type="button" ng-click = "admin.editAdmin(ad)" class="btn btn-info"> Edit</button>
            </td>
            <td><button type="button" ng-click = "admin.deleteAdmin(ad)" class="btn btn-danger"> Delete</button></td>
        </tr>
        </tbody>
    </table>
</div>