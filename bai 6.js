let a = parseFloat(prompt("Hãy nhập số a"));
let b = parseFloat(prompt("Hãy nhập số b"));
if(a===0){
    if(b===0){
        alert("phương trình vô số nghiệm");
    }else{
        alert("phương trình vô nghiệm")
    }
}else{
    alert(`Nghiệm của phương trình là x = ${-a/b}`);
}