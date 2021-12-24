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
        $(".uc-ga, .canh-ga, .dui-ga").show();
    });
    $('#thit-heo').click(function() {
        $('.show-child').hide();
        $('.vai-heo, .nac-heo, .dui-heo').show();
    });
    $('#kho-ca').click(function() {
        $('.show-child').hide();
        $('.kho-ca-chi, .kho-ca-sac').show();
    });
    $('#mi-goi').click(function() {
        $('.show-child').hide();
        $('.my-hao-hao').show();
    });
    $('#bo-trai').click(function() {
        $('.show-child').hide();
        $('.bo-trai').show();
    });
    $('#gao').click(function() {
        $('.show-child').hide();
        $('.gao').show();
    });
});