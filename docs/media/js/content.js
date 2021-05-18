function load_header(){
    fetch("//www.beatbox4108.tk/media/temprate/footer.temprate").then((val)=>{
        document.querySelector(".content-js[data-content-type=\"footer\"]").innerHTML=val.text
    }).catch(()=>{
        document.querySelector(".content-js[data-content-type=\"footer\"]").innerHTML="<div class=\"footer-error\">Sorry, loading failed. Please <a href=\"#\",onclick=\"load_header()\">reload</a></div>"
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    load_header()
})
