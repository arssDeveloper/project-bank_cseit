
let a = document.querySelector("#btnLogin")
let b = document.getElementById("user")
let c = document.getElementById("senha")


a.addEventListener('click', function(){

    if( b.value == "123456" && c.value == "123456"){
        console.log("brasil")
       
    } else{
        console.log("tente novamente")
        b.value = ""
        c.value = ""
        alert("Senha Incorreta")
    }
    
})