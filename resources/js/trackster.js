$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-term').val());
  })
})

var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  $('#tracklist').empty();

  for (var trackIndex = 0; trackIndex < tracks.length; trackIndex++) {
    var track = tracks[trackIndex];
    var $trackList = $('#tracklist')
    var htmlTrackRow =
    '<div class="row track-data">' +
    '<div class="col-xs-1 col-xs-offset-1"><a href="' + track.preview_url + '" target="_blank"><i class="fa fa-play-circle-o fa-2x"></i></a></div>' +
    '<div class="col-xs-4 title">' + track.name +
    '</div>' +
    '<div class="col-xs-2 title">' + track.artists[0].name +
    '</div>' +
    '<div class="col-xs-2 title">' + track.album.name +
    '</div>' +
    '<div class="col-xs-2 title">' + track.popularity + '</div>' +
    '</div>';

    $trackList.append(htmlTrackRow);
    console.log(tracks[trackIndex]);
  }
};

/*
  Given a search term as a string, query the Spotify API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search?type=track&q=' + title,
    datatype: 'jsonp',
    success: function(response) {
      Trackster.renderTracks(response.tracks.items);
    }
  })
};
