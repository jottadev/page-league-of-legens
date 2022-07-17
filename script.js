let [input1, input2] = document.querySelectorAll('input')
let btn = document.querySelector("button")



function handleChange(){

   if(input1.value && input2.value.length >= 8){
    btn.style.background = '#FF002E'
    btn.disable = ""

   } else {
    btn.style.background = '#FFA9B9'
    btn.disable = "disebled"
   }
}

input1.addEventListener('input', handleChange)
input2.addEventListener('input', handleChange)
