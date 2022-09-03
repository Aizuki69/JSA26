var SanPham = {
    ten: "BlueExstyle",
    gia: "1.000.000",
    mau: ["blue","black","pink"],
    anh: "https://digitrends.com.vn/wp-content/uploads/2019/06/chuot-may-tinh-tot-nhat-gia-re.jpg"
};
localStorage.setItem("sanpham", JSON.stringify(SanPham));

var sanphamtrongkho = JSON.parse(localStorage.getItem("sanpham"));

var khungsanpham = document.createElement("div");
document.body.appendChild(khungsanpham);  
khungsanpham.classList.add("khung-san-pham");       

var anhsanpham = document.createElement("img");
anhsanpham.src = sanphamtrongkho.anh;
khungsanpham.appendChild(anhsanpham);

var khungthongtin = document.createElement("div");
khungthongtin.classList.add("khung-thong-tin");
khungsanpham.appendChild(khungthongtin);

var tensanpham = document.createElement("h1");
tensanpham.textContent = sanphamtrongkho.ten;
khungthongtin.appendChild(tensanpham);

var giasanpham = document.createElement("h2");
giasanpham.textContent = sanphamtrongkho.gia;
khungthongtin.appendChild(giasanpham);

var giamgia = document.createElement("p");
var text0 = document.createTextNode("Giảm 50%");
giamgia.appendChild(text0)
khungthongtin.appendChild(giamgia);

var khungmau = document.createElement("div");
khungmau.classList.add("khung-mau");
khungthongtin.appendChild(khungmau);

sanphamtrongkho.mau.forEach(function(element) {
var mausanpham = document.createElement("div");
mausanpham.style.backgroundColor = element;
khungmau.appendChild(mausanpham);
});

var them = document.createElement("button");
them.onclick = ("themsp()");
var text = document.createTextNode("Thêm vào giỏ hàng");
them.appendChild(text);
khungthongtin.appendChild(them);

var giohang = document.createElement("div");
document.body.appendChild(giohang);
giohang.classList.add("gio-hang");

// function themsp() {
// var sanpham = document.createElement("div")
// giohang.appendChild(sanpham)

// var anhsanpham = document.createElement("img")
// anhsanpham.src = sanphamtrongkho.anh
// sanpham.appendChild(anhsanpham)

// var tensanpham = document.createElement("h1")
// tensanpham.textContent = sanphamtrongkho.ten
// sanpham.appendChild(tensanpham)

// var giamgia = document.createElement("p")
// var text0 = document.createTextNode("500.000")
// giamgia.appendChild(text0)
// sanpham.appendChild(giamgia)
// };

