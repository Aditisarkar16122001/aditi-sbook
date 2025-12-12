var settingsmenu = document.querySelector(".settingsmenu");

var darkbtn = document.getElementById("darkbtn");


function settingsMenuToggle( ) {
    settingsmenu.classList.toggle("settingsmenuheight");
    
}

darkbtn.onclick=function(){
    darkbtn.classList.toggle("darkbtnon");
    document.body.classList.toggle("darktheme");


    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}




if(localStorage.getItem("theme")=="light"){
    darkbtn.classList.remove("darkbtnon");
    document.body.classList.remove("darktheme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.remove("darkbtnon");
    document.body.classList.add("darktheme");

}
else{
    localStorage.setItem("theme","light");
}


localStorage.setItem("theme","dark");
localStorage.getItem("theme");