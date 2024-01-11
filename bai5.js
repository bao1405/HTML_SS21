var thangNhap = prompt("Nhập vào số tháng trong năm (từ 1 đến 12):");
var thang = parseInt(thangNhap);
if (thang >= 1 && thang <= 12) {
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            console.log("Số ngày trong tháng " + thang + " là 31 ngày.");
            break;
        case 4: case 6: case 9: case 11:
            console.log("Số ngày trong tháng " + thang + " là 30 ngày.");
            break;
        case 2:
            console.log("Số ngày trong tháng 2 là 28 hoặc 29 ngày.");
            break;
        }
    } else {
        console.log("Giá trị không hợp lệ. Hãy nhập một số từ 1 đến 12.");
    }