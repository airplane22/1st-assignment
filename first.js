// Run by Node.js
// 369 게임
// node first.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	console.log("Hello Goorm! Your input is", line);
	rl.close();
}).on("close", function() {
	process.exit();
});


const Nstring = prompt('');
const N = parseInt(Nstring);
let clap = 0;

for (let i=1; i<N; i++) {
	let num = i.toString();
	let arr = [...num] ;
  for(let item of arr){
    if (item === '3' || item === '6' || item === '9') {
			clap++;
  }
	}
}

clap;