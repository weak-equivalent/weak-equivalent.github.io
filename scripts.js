
/* Read More toggle */
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  }
}

/* Google Analytics*/
var google = document.createElement('script');
google.async = true;
google.src = 'https://www.googletagmanager.com/gtag/js?id=G-J9ZY4SQ9GJ';
document.head.appendChild(google);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-J9ZY4SQ9GJ');

/* goatcounter */
var goat = document.createElement('script');
goat.async = true;
goat.src = 'https://zgo.at';
script.setAttribute('data-goatcounter', 'https://teixeira.goatcounter.com/count');
document.head.appendChild(goat);

/* mathjax */
var mathjax = document.createElement('script');
mathjax.async = true;
mathjax.src = 'https://jsdelivr.net';
document.head.appendChild(mathjax);