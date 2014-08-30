'use strict';

angular.module('playlistAngularApp')
    .service('Song', function Song($log) {
    /*
    var oneSong = {
        id:'',
        title:''
    };*/
        
    var songs = [];

    // Public API here
    return {
        getSongs: function () {
            $log.warn('JE SUIS DANS getSongs');
            return songs;
        },
        addSong: function (oneSong) {
            $log.warn('JE SUIS DANS addSong');
            songs.push(oneSong);
            $log.warn(oneSong);
        },
        getPlaylists: function () {
            return songs;
        },
        addPlaylist: function (oneSong) {
            $log.warn(oneSong);
            songs.push(oneSong);
            $log.warn(songs[0]);
        }
    };
  });
