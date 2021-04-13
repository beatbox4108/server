//header
const header=document.createElement("header")
document.body.insertBefore(header)
header.innerHTML=`<header>
<div class="header title">beatbox4108.tk</div>
<nav class="header navigation">
<div class"header navigation-item" data-url="/index.html">Top</div>
<div class"header navigation-item" data-url="/about.html">About</div>
<div class"header navigation-item" data-url="/services/">Services</div>
</nav>
</header>`
const navigation=document.createElement("nav")
document.body.insertBefore(navigation)
navigation.innerHTML=`<iframe href="/nav.html" class="flatview">Sorry,I couldn't open navigation.<br><a href="/nav.html" target="_blank">View in new tab</a>?</iframe>`
const footer=document.createElement("footer")
document.body.insertBefore(footer)
footer.innerHTML=`
<iframe href="/nav.html" class="flatview">Sorry,I couldn't open footer.<br><a href="/footer.html" target="_blank">View in new tab</a>?</iframe>
`
