function Check() {
    var frm = document.forms['frm'];
    var password = frm.password;
    var confirm = frm.confirmPassword;

    if(password.value != confirm.value) {
        alert('Nhập lại mật khẩu không trùng khớp');
        confirm.focus();
        return false;
    }
    alert('Đăng ký thành công !!');
    return true;
}
function chuyenHuong() {
    window.location.href("index.html");
}