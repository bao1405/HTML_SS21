let diemToan = parseFloat(prompt("Nhập điểm môn Toán:"));
let diemVan = parseFloat(prompt("Nhập điểm môn Văn:"));
let diemAnh = parseFloat(prompt("Nhập điểm môn Anh:"));
let diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;
if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
    console.log("Xếp loại: GIỎI");
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    console.log("Xếp loại: KHÁ");
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
    console.log("Xếp loại: TRUNG BÌNH");
} else if(diemTrungBinh < 5.0){
    console.log("Xếp loại: YẾU");
}else {
    console.log("Điểm không hợp lệ. Vui lòng nhập điểm từ 0 đến 10.");
}
