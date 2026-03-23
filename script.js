function makeid(l) {
  // write your code here
	let range="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let ans=[];
	for(let i=0;i<l;i++){
		let random=Math.floor(Math.random()*range.length);
		ans.push(range[random]);
	}
	return ans.join("");
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
