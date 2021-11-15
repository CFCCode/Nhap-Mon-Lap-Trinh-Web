$(document).ready(function() {
    $('#khac').click(() => $('.show-child').show());
    $('#khau-trang').click(function() {
        $('.show-child').hide();
        $('.khau-trang').show();
    });
    $('#nuoc-rua-tay').click(function() {
        $('.show-child').hide();
        $('.nuoc-rua-tay').show();
    });
    $('#dau-an').click(function() {
        $('.show-child').hide();
        $('.dau-an').show();
    });
    $('#dau-goi').click(function() {
        $('.show-child').hide();
        $('.dau-goi').show();
    });
    $('#duong').click(function() {
        $('.show-child').hide();
        $('.duong-tinh-luyen').show();
    });
    $('#nuoc-rua-tay').click(function() {
        $('.show-child').hide();
        $('.nuoc-rua-tay').show();
    });
    $('#nuoc-tuong').click(function() {
        $('.show-child').hide();
        $('.nuoc-tuong').show();
    });
});