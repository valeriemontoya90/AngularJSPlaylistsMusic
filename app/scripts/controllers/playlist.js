'use strict';

angular.module('playlistAngularApp')
  .controller('PlaylistCtrl', function ($scope, Playlist) {
    //FORM
    $scope.addPlaylist= function () {
        Playlist.addPlaylist($scope.playlist);
        $scope.playlist={};
        //$scope.myForm.$setPristine();
        //$location.path('/liste');
    };
    Playlist.loadPlaylists().success(function(){
        $scope.playlists = Playlist.getPlaylists();
    });
  })
