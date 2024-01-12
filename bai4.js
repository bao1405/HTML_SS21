var soNhap = prompt("Nhập vào một số:");
var soNguyen = parseFloat(soNhap);
var ketQua;
if (soNguyen > 0) {
    ketQua = "Số dương";
} else if (soNguyen < 0) {
    ketQua = "Số âm";
} else {
    ketQua = "Số không";
}
console.log(ketQua);
