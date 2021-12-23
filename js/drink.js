$(document).ready(function() {
    $('#thuc-pham').click(() => $('.show-child').show());
    $('#sua').click(function() {
        $('.show-child').hide();
        $('.sua').show();
    });
    $('#nuoc').click(function() {
        $('.show-child').hide();
        $('.nuoc').show();
    });
    $('#nuoc-ngot').click(function() {
        $('.show-child').hide();
        $('.nuoc-ngot').show();
    });
    $('#nuoc-bu-khoang').click(function() {
        $('.show-child').hide();
        $('.nuoc-bu-khoang').show();
    });

});