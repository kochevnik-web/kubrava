"use strict";
jQuery(document).ready(function ($) {
    $(".youtube").each(function () {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');

        // Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', { 'class': 'play' }));

        $(document).delegate('#' + this.id, 'click', function () {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', { 'allowfullscreen': true, 'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).html(iframe);
        });
    });
});