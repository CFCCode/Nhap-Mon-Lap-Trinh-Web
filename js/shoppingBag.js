
var product1 = {
    "image": 'img/other/khau-trang-y-te.png',
    "title": 'Khẩu Trang Y Tế',
    "price": '27.000d',
};
var product2 = {
    "image": 'img/other/dauan.jpg',
    "title": 'Dầu Ăn',
    "price": '25.000d',
};
var product3 = {
    "image": 'img/other/duong.png',
    "title": 'Đường Tinh Luyện',
    "price": '20.000d',
};
var products = [product1, product2];
products.push(product3);
products.forEach((p, index) => {
    var table = document.getElementById('table');
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');

    tr.className = 'row-prod';
    var img = document.createElement('img');
    img.src = p.image;
    img.width = 100;
    img.height = 100;
    td1.appendChild(img);
    td2.innerHTML = p.title;

    
    var input = document.createElement('input');
    input.type = 'number';
    input.step = 1;
    input.value = 1;
    td3.appendChild(input);
    td4.innerHTML = p.price;
    td5.innerHTML = p.price;
    td6.innerHTML = '<i id="delete' + index + '" class="far fa-trash-alt fa-2x"></i>';


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
});
var deletes = document.getElementById('delete');
deletes.addEventListener('click', () => {
    deletes.parentElement.parentElement.style.display = 'none';
});
var delete0 = document.getElementById('delete0');
delete0.addEventListener('click', () => {
    delete0.parentElement.parentElement.style.display = 'none';
});
var delete1 = document.getElementById('delete1');
delete1.addEventListener('click', () => {
    delete1.parentElement.parentElement.style.display = 'none';
});
var delete2 = document.getElementById('delete2');
delete2.addEventListener('click', () => {
    delete2.parentElement.parentElement.style.display = 'none';
});
var delete3 = document.getElementById('delete3');
delete3.addEventListener('click', () => {
    delete3.parentElement.parentElement.style.display = 'none';
});