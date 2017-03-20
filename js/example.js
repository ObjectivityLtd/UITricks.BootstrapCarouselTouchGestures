// Bootstrap carousel scrolling using touch gestures
$('.carousel').swipe({
    allowPageScroll: 'vertical',
    swipe: function(e, direction, distance, duration, fingerCount, fingerData) {
        if (direction === 'left') {
            $(this).carousel('next');
        }

        if (direction === 'right') {
            $(this).carousel('prev');
        }
    }
});
