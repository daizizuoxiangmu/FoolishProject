

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
var imgm =  document.getElementsByClassName("img-main");
var ulm = document.getElementsByClassName("img-ul")[0];
var lim = ulm.getElementsByTagName("li")

for(let i = 0;i < imgm.length;i++){
    imgm[i].className = "img-main hide"
}
imgm[0].className = "img-main";

for(let i = 0;i < lim.length;i++){
    lim[i].index = i;
    lim[i].onmouseover = function(){
        for(let j = 0; j < imgm.length; j++) {
            imgm[j].className = "img-main hide";
        }
            imgm[this.index].className = "img-main"; 
        for(let j = 0; j < imgm.length; j++) {
            lim[j].className = "goods-sp"       
        }   
        this.className = "goods-sp-hover"
    }
}