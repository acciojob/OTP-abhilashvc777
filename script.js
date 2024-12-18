//your JS code here. If required.
const input  = document.getElementsByClassName("code")
const div1 = document.getElementsByClassName("code-container")
let i = 0;
div1[0].addEventListener("keyup", (e)=>{
	// console.log(e.target)
	if(e.key=="Backspace"){
		i--
		input[i].focus() 
	}else{
		i++
		input[i].focus()
	}
})


