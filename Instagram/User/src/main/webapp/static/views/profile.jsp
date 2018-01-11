<button ng-click="profile.openModal()" class="btn btn-success btn-lg pull-right"> Upload Photo</button>

<div ng-hide ="profile.showList">
    <div class="alert alert-success" ng-show="saved">
        <strong>{{message}}</strong>
    </div>
<div ng-repeat="photo in profile.photoList">
    <tr>
        <td><img src="uploads/{{photo.image_path}}"></td>
        <td>{{photo.caption}}</td>
    </tr>
</div>

</div>