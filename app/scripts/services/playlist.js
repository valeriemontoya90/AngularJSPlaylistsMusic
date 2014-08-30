'use strict';

angular.module('playlistAngularApp')
  .service('Playlist', function Playlist($log, $http) {
    // Service logic
        // ...
        var onePlaylist = {
            id:'',
            title:''
        }
        
        var playlists = [];
        
        return {
            loadPlaylists: function(){
                return $http.get('https://api.deezer.com/user/2529/playlists')
                    .success(function(data, status) {
                        playlists=data.data;
                });
            },
            getPlaylists: function () {
                return playlists;
            },
            addPlaylist: function (onePlaylist) {
                $log.warn(onePlaylist);
                playlists.push(onePlaylist);
                $log.warn(playlists[0]);
            }
        };
  });
