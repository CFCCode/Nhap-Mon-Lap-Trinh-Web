$(document).ready(function() {
    $('#thuc-pham').click(function() {
        $('.show-child').show();
    });
    $('#trung-ga').click(function() {
        $('.show-child').hide();
        $('.trung-ga').show();
    });
    $('#thit-bo').click(function() {
        $('.show-child').hide();
        $('.thit-bo').show();
    });
    $('#thit-ga').click(function() {
        $('.show-child').hide();
        $('.uc-ga').show();
    });
    $('#thit-heo').click(function() {
        $('.show-child').hide();
        $('.thit-heo').show();
    });
    $('#kho-ca').click(function() {
        $('.show-child').hide();
        $('.kho-ca-chi').show();
    });
    $('#mi-goi').click(function() {
        $('.show-child').hide();
        $('.my-hao-hao').show();
    });
    $('#bo-trai').click(function() {
        $('.show-child').hide();
        $('.bo-trai').show();
    });
});