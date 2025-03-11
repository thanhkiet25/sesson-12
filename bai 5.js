let a = parseFloat(prompt("Hãy nhập đọ dài cạnh A"));
let b = parseFloat(prompt("Hãy nhập đọ dài cạnh B"));
let s = (1/2)*a*b;
if(isNaN(a) || isNaN(b)){
    alert("Không hợp lệ");
}
alert("Diện tích tam giác vuông là " + s);