
const passwordBox = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()-_=+[]{};:'<>/?\|`";
 const mixedpass = uppercase + lowercase + number + symbol; 

function createPassword(){
   let  password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while(length > password.length){
        password += mixedpass[Math.floor(Math.random() * mixedpass.length)];
    }
    passwordBox.value = password;
}

document.querySelector(".button").addEventListener("click",()=>{
    createPassword()
})
document.querySelector(".copy").addEventListener("click",()=>{
    copyPassword()
})
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

document.querySelector(".refresh").addEventListener("click",()=>{
    createPassword()
})