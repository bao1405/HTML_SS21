var namSinh = prompt("Bạn sinh năm bao nhiêu?");
if (!isNaN(namSinh)) {
    var namSinhSo = parseInt(namSinh);
    var tuoi = new Date().getFullYear() - namSinhSo;
    console.log("Tuổi của bạn là: " + tuoi + " tuổi");
} else {
    console.log("Giá trị nhập vào không hợp lệ. Hãy nhập một số.");
}