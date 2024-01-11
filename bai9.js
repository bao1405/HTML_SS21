let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));
let c = parseFloat(prompt("Nhập số c:"));
let arr = [a, b, c];
arr.sort(function (x, y) {
    return x - y;
});
console.log("Các số theo thứ tự tăng dần: " + arr[0] + ", " + arr[1] + ", " + arr[2]);