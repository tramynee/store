
// Danh sách sản phẩm để tìm kiếm
const products = [
    { name: "Bơ sáp 1KG", link: "../html/bosap.html" },
    { name: "Táo Mỹ 500G", link: "../html/tao.html" },
    { name: "Cam Sành", link: "../html/cam.html" },
    { name: "Chanh Dây", link: "../html/chanhday.html" },
    { name: "Đào Size S", link: "../html/dao.html" },
    { name: "Dưa Hấu 1KG", link: "../html/duahau.html" },
    { name: "Dươi lưới loại 1", link: "../html/dualuoi.html" },
    { name: "Kiwi úc", link: "../html/kiwi.html" },
    { name: "Lê Hàn Quốc", link: "../html/le.html" },
    { name: "Lựu Tiền Giang 1KG", link: "../html/luu.html" },
    { name: "Mãng Cầu Ta", link: "../html/mangcau.html" },
    { name: "Măng Cụt", link: "../html/mangcut.html" }
];

function searchProduct() {
    const searchTerm = document.querySelector('.input-group input').value.toLowerCase();
    const product = products.find(p => p.name.toLowerCase().includes(searchTerm));

    if (product) {
        // Chuyển hướng đến trang chi tiết sản phẩm
        window.location.href = product.link;
    } else {
        alert("Sản phẩm không tìm thấy!");
    }
}
