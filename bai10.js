//if/else được sử dụng để kiểm tra giá trị của biến và thực hiện các hành động tương ứng với từng trạng thái.
// vd 
let a = "active";

if (a === "active") {
    console.log("Trạng thái hoạt động");
} else if (a === "inactive") {
    console.log("Trạng thái không hoạt động");
} else {
    console.log("Trạng thái không xác định");
}

//switch/case được sử dụng để kiểm tra giá trị của biến và thực hiện các hành động tương ứng với từng giá trị khác nhau của biến. break được sử dụng để ngăn chặn việc thực hiện các trường hợp khác sau khi một trường hợp đã được thực hiện.
//vd
let b = "admin";

switch (b) {
    case "admin":
        console.log("Người dùng có quyền quản trị");
        break;
    case "user":
        console.log("Người dùng có quyền người dùng");
        break;
    default:
        console.log("Không xác định quyền của người dùng");
}   