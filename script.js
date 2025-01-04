//your JS code here. If required.
let btn = document.getElementById('btn');
let output = document.getElementById('output');

function delay(time) {
	return new Promise((resolve) => setTimeout(resolve,time));
}

btn.addEventListener('click', async function(){
	let txt = document.getElementById('text').value;
    let num = parseInt(document.getElementById('delay').value);
	
	output.innerHTML=``;
	await delay(num);
	
	output.innerHTML=`${txt}`;
})