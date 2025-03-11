let a = parseFloat(prompt("Hãy nhập cạnh a"));
let b = parseFloat(prompt("Hãy nhập cạnh b"));
let s = (a + b)*2;
if(isNaN(a) || isNaN(b)){
    alert("Không hợp lệ");
}
alert("Diện tích hình chữ nhật là " + s);