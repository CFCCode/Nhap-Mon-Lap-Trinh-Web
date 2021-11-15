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
});