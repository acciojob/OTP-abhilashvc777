//your JS code here. If required.
// const input  = document.getElementsByClassName("code")
// const div1 = document.getElementsByClassName("code-container")

// div1[0].addEventListener("keypress", (e)=>{
// 	// console.log(e.target)
// 	if(e.key=="Backspace"){
// 		e.nextElementSibling.focus() 
// 	}else{
// 		e.previousElementSibling.focus()
// 	} 
// })
// const inputs  = document.getElementsByClassName("code")

// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("keyup", function(e) {
//         if (e.target.value) {
//             if (e.target.nextElementSibling) {
//                 e.target.nextElementSibling.focus();
//             }
//         } else if (e.key === "Backspace") {
//             if (e.target.previousElementSibling) {
//                 e.target.previousElementSibling.focus();
//             }
//         }
//     });
// }
// Get all the input fields
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value.slice(0, 1);
    }
    if (e.target.value && inputs[index + 1]) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !e.target.value && inputs[index - 1]) {
      inputs[index - 1].focus();
    }
  });
});


