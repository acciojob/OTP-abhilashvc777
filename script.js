//your JS code here. If required.
// const input  = document.getElementsByClassName("code")
const div1 = document.getElementsByClassName("code-container")

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

// Loop over each input field
inputs.forEach((input, index) => {
  // Add an event listener for 'input' event
  input.addEventListener("input", (e) => {
    // If the user has entered a value, focus on the next input field
    if (e.target.value) {
      if (inputs[index + 1]) {
        inputs[index + 1].focus();
      }
    }
  });

  // Add an event listener for 'keydown' event
  input.addEventListener("keydown", (e) => {
    // If the user has pressed the backspace key and the input field is empty, focus on the previous input field
    if (e.key === "Backspace" && !e.target.value) {
      if (inputs[index - 1]) {
        inputs[index - 1].focus();
      }
    }
  });
});


