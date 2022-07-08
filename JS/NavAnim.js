window.addEventListener("scroll", ()=>{
    let scroll = window.pageYOffset;
    console.log(scroll)
    if(scroll > 100){
        document.getElementById("logo").style.width ="5em";
    }
    else{
        document.getElementById("logo").style.width ="10em";
    }
})