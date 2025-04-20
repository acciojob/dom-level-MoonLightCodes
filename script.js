//your JS code here. If required.
let items = document.querySelectorAll('li');
items.forEach((e,i)=>{
	if(e.getAttribute("ID")==="level"){
		alert("The level of the element is: "+(i));
	}
})