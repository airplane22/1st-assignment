// Run by Node.js
// 은행 예금 이자 구하기
// node second.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log(line);
	rl.close();
}).on("close", function() {
	process.exit();
});


const input = prompt('');
const arr = input.split(' ');

let p = parseInt(arr[0]);
const r = parseFloat(arr[1]);
const y = parseInt(arr[2]);

let i=0;
while (i<y) {
  p = p*((100+r)/100);
  i++
  console.log(p);
}

p.toFixed(2);
