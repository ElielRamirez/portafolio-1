$(document).ready(function() {
    $('header input[type="checkbox"]').click(function() {
        if ($(this).is(":checked")) {
            $('header nav').show();
        } else if ($(this).is(":not(:checked)")) {
            $('header nav').hide();

        }
    });

    $(window).resize(function() {
        if ($(window).width() > 992) {
            $('header nav').show();

        }
    });



});