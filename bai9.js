var a = parseFloat(prompt("Nhập số a:"));
var b = parseFloat(prompt("Nhập số b:"));
var c = parseFloat(prompt("Nhập số c:"));
var arr = [a, b, c];
arr.sort(function (x, y) {
    return x - y;
});
console.log("Các số theo thứ tự tăng dần: " + arr[0] + ", " + arr[1] + ", " + arr[2]);
