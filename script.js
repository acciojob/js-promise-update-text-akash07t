//your JS code here. If required.
// function Sayhello() {
// 	return new promise((resolve) =>{
// 	setTimeout(() =>{
// 		resolve("Hello, world");
// 	},1000)
// })

// }
// let div = document.getElementById("output")
// Sayhello().then((data)=>{
// 	div.textContent = data;
// })


function sayHello(){
	return new promise((resolve) => {
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	});
}

const output =document.getElementbyId("output");
sayHello().then((result)=>{
	output.textContent=result;
});


