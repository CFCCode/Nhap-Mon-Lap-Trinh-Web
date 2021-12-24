$(document).ready(function(){
    $('.show-child img').click(function(){
        $('#box-product').append('.show-child img');
    });
});
function dieu_huong() {
    location.assign("detail.html");
    var newElement = document.createElement('img');
    newElement.src = " https://vinid.net/blog/gia-trung-ga-la-bao-nhieu-mua-o-dau-an-toan/";
    document.getElementById('box-product').appendChild(newElement);
}