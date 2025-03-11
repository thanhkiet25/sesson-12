let kiemtra = parseFloat(prompt("nhập điểm kiẻm tra của bạn vào"));
let giua = parseFloat(prompt("nhập điểm giữa kỳ của bạn vào"));
let cuoi = parseFloat(prompt("nhập điểm cuối kỳ của bạn vào"));
let avegare = (kiemtra*0.3) + (giua*0.3) + (cuoi*0.4);
if (avegare>=9) {
    alert("xuất sắc");
} else if(avegare<9 && avegare>=8){
    alert("Giỏi");
}else if(avegare<8 && avegare>= 6.5){
    alert("Khá");
}else if (avegare<6.5 && avegare>=5){
    alert("Trung bình");
}else{
    alert("Yếu");
}