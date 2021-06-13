function load_header(){
    document.querySelector(".content-js[data-content-type=\"footer\"]").innerHTML=`
<section>
    <section>
    <a href="https://twitter.com/intent/tweet?url=This is so good! ${location.href}"><img src="//www.beatbox4108.tk/media/img/sns-icon/twitter.png"></a>
    <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-normal" data-hatena-bookmark-lang="en" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a><script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
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
            </tr>
            <tr>
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
