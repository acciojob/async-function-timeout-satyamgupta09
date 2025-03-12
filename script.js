function delay(t){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("y"); 
		},t); 
	})
}

document.getElementById("btn").addEventListener('click', async function(){
	let val = document.getElementById("text").value;
    let num = parseInt(document.getElementById("delay").value, 10) || 0;

	await delay(num);

	document.getElementById("output").innerHTML=`<p>${val}</p>`
})