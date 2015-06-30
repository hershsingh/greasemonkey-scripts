// ==UserScript==
// @name        MathJaxForEveryone
// @desription  Load MathJax on the current page by pressing F4
// @version     0.1
// @grant       none
// @include     *
// ==/UserScript==

document.onkeypress = function(event) {
    // If F4 is pressed
    //alert(event.keyCode);
    if (event.keyCode == 115) {
        MathJaxCheck() ;
    }
}

MathJaxLoad = function ()  {
    var sc1 = document.createElement('script');
    sc1.type = 'text/x-mathjax-config';
    //sc1.innerHTML = ' MathJax.Hub.Config({ tex2jax: {inlineMath: [[\'$\',\'$\'], [\'\\(\',\'\\)\']]} }); ';
    sc1.innerHTML = ' MathJax.Hub.Config({ tex2jax: {inlineMath: [[\'$\',\'$\']]} }); ';
    document.getElementsByTagName('head')[0].appendChild(sc1);

    var sc = document.createElement('script');
    sc.type = 'text/javascript';
    sc.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
    document.getElementsByTagName('head')[0].appendChild(sc);
}
MathJaxRefresh = function () {
    MathJax.Hub.Typeset();
    // Somehow, this does not work.
    //MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}
MathJaxCheck = function () {
    // Check if MathJax is loaded 
    if (typeof MathJax == "undefined"){  MathJaxLoad() ; }
    else { MathJaxRefresh() ; }
}

