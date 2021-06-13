function load_header(){
    document.querySelector(".content-js[data-content-type=\"footer\"]").innerHTML=`
<section>
    <section>
        <iframe src="https://www.facebook.com/plugins/like.php?href=${location.href}&width=92&layout=box_count&action=like&size=small&share=true&height=65&appId" width="92" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </section>
    <section>
        <table style="margin: auto;">
            <tr><th colspan="2">beatbox4108</th></tr>
            <tr><td><a href="http://www.beatbox4108.tk/index.html">TopPage</a></td><td><a href="http://wtool.beatbox4108.tk/index.html">WebToolbox</a></td></tr>
            <tr><th colspan="2">WebToolbox</th></tr>
            <tr><td colspan="2"><a href="http://wtool.beatbox4108.tk/index.html">TopPage</a></td></tr>
            <tr>
                <td><a href="http://wtool.beatbox4108.tk/tageraser.html">HTMLTagEraser</a></td>
                <td><a href="http://wtool.beatbox4108.tk/tageraser.html">Microwave wattage transducer</a></td>
                <td><a href="http://wtool.beatbox4108.tk/textedit.html">Memo</a></td>
                <td><a href="http://beatbox4108.github.io/bwctc/index.html"><s>World Clock</s></a></td>
            </tr>
        </table>
    </section>
    <section>
        <small>&copy;2021 beatbox4108 All rights reserved.</small>
    </section>
</section>
`
}

document.addEventListener("DOMContentLoaded",()=>{
    load_header()
})
