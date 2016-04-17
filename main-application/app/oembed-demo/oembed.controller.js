'use strict';

angular.module('clientsideIntegration')
  .controller('OembedCtrl', function ($http, $sce) {
    var self = this;

    var videoUrl = 'https://vimeo.com/111117420';
    var endpoint = 'http://www.vimeo.com/api/oembed.json';
    var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=JSON_CALLBACK&width=640';

    $http.jsonp(url)
      .then(function (result) {
        var data = result.data;
        console.log('oembed data from vimeo', data);
        self.title = data.title + ' - ' + data.author_name;
        self.oembedHtml = $sce.trustAsHtml(result.data.html);
      });
  });
