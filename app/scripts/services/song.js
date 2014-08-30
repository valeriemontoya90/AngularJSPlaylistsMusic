'use strict';

angular.module('playlistAngularApp')
<<<<<<< HEAD
  .service('Song', function Song($log) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    var oneSong = {
        id:"",
        name:""
    }
        
    var songs = [];

    // Public API here
    return {
        getSongs: function () {
            $log.warn("JE SUIS DANS getSongs");
            return songs;
        },
        addSong: function (oneSong) {
            $log.warn("JE SUIS DANS addSong");
            songs.push(oneSong);
            $log.warn(oneSong);
        },
        getPlaylists: function () {
            return playlists;
        },
        addPlaylist: function (playlist) {
            $log.warn(playlist);
            playlists.push(playlist);
            $log.warn(playlists[0]);
        }
    };

  });
