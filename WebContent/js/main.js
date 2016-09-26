var li = document.getElementsByClassName("page-list")[0];
var sli = li.getElementsByClassName("list")
var ali = li.getElementsByTagName("a");
var acont = document.getElementsByClassName("content");
var i;
var j;



acont[0].style.display = "block"  
ali[0].style.color = "white"
for (i = 0; i < ali.length; i++){
    sli[i].index = i;
    sli[i].onclick = function(){
        for(i = 0; i < sli.length; i++){
            sli[i].classList.remove('active')
            sli[i].classList.add('lazy')
            ali[i].style.color = "black"
        }
        sli[this.index].classList.add('active')
        sli[this.index].classList.remove('lazy')
        ali[this.index].style.color = "white"
        for( j = 0; j < acont.length; j++){
            acont[j].style.display = "none"
        }
        acont[this.index].style.display = "block"            
    }
    

}