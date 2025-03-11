let a = parseFloat(prompt("Hãy nhập số a"));
let b = parseFloat(prompt("Hãy nhập số b"));
let c = parseFloat(prompt("Hãy nhập số c"));
let delta = b ** 2 - 4 * (a * c);
if (a === 0) {
  if (b === 0) {
    if (c === 0) {
      alert("Phương trình vô số nghiệm");
    } else {
      alert("phương trình vô nghiệm");
    }
  } else {
    alert(`nghiệm của phương trình là x = ${-b / c}`);
  }
} else if (delta > 0) {
  alert(`Ngiệm thứ nhất x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}`);
  alert(`Ngiệm thứ nhất x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`);
} else if (delta === 0) {
  alert(`Phương trình có nghiệm kép x = ${-b / (2 * a)}`);
} else {
  alert("phương trình không có nghiệm thực");
}
