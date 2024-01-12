var soNhap = prompt("Nhập vào một số bất kỳ:");
if (!isNaN(soNhap)) {
    var soNhapSo = parseFloat(soNhap);
    if (soNhapSo % 2 === 0) {
        console.log("Số " + soNhapSo + " là số chẵn.");
    } else {
        console.log("Số " + soNhapSo + " là số lẻ.");
    }
} else {
    console.log("Giá trị nhập vào không hợp lệ. Hãy nhập một số.");
}
