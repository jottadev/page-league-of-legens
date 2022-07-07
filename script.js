const username = document.querySelector('#input-text')
const password = document.querySelector('#input-password')
const btn = document.querySelector('[alt-=arrowright]')



function handleChange(){
    if(username.value && password.value >= 8){
       btn.styles.backgroundColor = "#FF123D"
    }else {
        btn.styles.backgroundColor = "#FFA9B9"
    }
}

username.addEventListener('input', handleChange)
password.addEventListener('input', handleChange)
