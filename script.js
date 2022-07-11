const email = document.getElementById("emailField");
const errMsg = document.getElementById("errMsg");
const errImg = document.getElementById("errImg");
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    console.log('clicked');
    if(email.value.includes("@")){
        console.log('correct');
    }else{
        errMsg.innerHTML = "Please provide a valid email";
        errImg.style.display = 'block';
        console.log("error");
    }
})