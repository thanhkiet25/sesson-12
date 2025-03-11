let a = parseFloat(prompt("Hãy nhập một sô thực bất kì"));
let b = parseFloat(prompt("Hãy nhập một sô thực bất kì"));
let c = parseFloat(prompt("Hãy nhập một sô thực bất kì"));
if(a+b>c && b+c>a && c+a>b ){
    alert("Là cạnh của một tam giác");
}else{
    alert("Không phải là cạnh của tam giác");
}