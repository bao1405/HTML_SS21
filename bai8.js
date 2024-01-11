var canNang = parseFloat(prompt("Nhập cân nặng (kg):"));
var chieuCao = parseFloat(prompt("Nhập chiều cao (m):"));

var bmi = canNang / (chieuCao ** 2);
console.log("Chỉ số BMI của bạn là: " + bmi);
if (bmi < 18.5) {
    console.log("cân nặng thấp(Gầy)");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Bình thường");
} else if (bmi >= 25) {
    console.log("thừa cân");
} else if(bmi >= 25 && bmi <= 29.9 ){
    console.log("Tiền béo phì");
}else if(bmi >= 30 && bmi <= 34.9 ){
    console.log("béo phì độ II");
}else if(bmi >= 35 && bmi <= 39.9 ){
    console.log("béo phì độ II");
}else{
    console.log("béo phì độ III");
}

