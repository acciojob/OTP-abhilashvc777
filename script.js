//your JS code here. If required.
const input  = document.getElementsByClassName("code")
const div1 = document.getElementsByClassName("code-container")

// div1[0].addEventListener("keypress", (e)=>{
// 	// console.log(e.target)
// 	if(e.key=="Backspace"){
// 		e.nextElementSibling.focus() 
// 	}else{
// 		e.previousElementSibling.focus()
// 	} 
// })
const inputs  = document.getElementsByClassName("code")

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function(e) {
        if (e.target.value) {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.focus();
            }
        } else if (e.key === "Backspace") {
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.focus();
            }
        }
    });
}


