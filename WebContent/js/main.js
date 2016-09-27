

function $(id){
  return  document.getElementById(id);
}

var achoose = document.getElementsByClassName("login-choose")
var alogin = document.getElementsByClassName("login-in")
var abtn = $("login-btn")

achoose[0].addEventListener("click",function(){
    alogin[0].classList.remove("hide") 
    alogin[1].classList.add("hide") 
    abtn.innerHTML = "登录"
})
achoose[1].addEventListener("click",function(){
    alogin[1].classList.remove("hide") 
    alogin[0].classList.add("hide") 
    abtn.innerHTML = "注册"
})

abtn.onclick = function(){
    
}