

function $(id){
  return  document.getElementById(id);
}
//
var achoose = document.getElementsByClassName("login-choose")
var alogin = document.getElementsByClassName("login-in")
var abtn = $("login-btn")

document.getElementsByClassName("close")[0].onclick = function(){
    $("login-warp").style.display = "none"
}

$("login").addEventListener("click",function(){
    $("login-warp").style.display = "block"
})

achoose[0].addEventListener("click",function(){
    alogin[0].classList.remove("hide") 
    alogin[1].classList.add("hide") 
})
achoose[1].addEventListener("click",function(){
    alogin[1].classList.remove("hide") 
    alogin[0].classList.add("hide") 
})

//
