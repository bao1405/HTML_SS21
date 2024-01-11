let soNhap = prompt("Nhập vào một số:");
let soNguyen = parseFloat(soNhap);
let ketQua;
if (soNguyen > 0) {
    ketQua = "Số dương";
} else if (soNguyen < 0) {
    ketQua = "Số âm";
} else {
    ketQua = "Số không";
}
console.log(ketQua);
