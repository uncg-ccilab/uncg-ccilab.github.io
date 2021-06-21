//fix for dropdown click propogation


$('.dropdown-toggle').on('click', function (e) {
      $('.navbar-collapse').each(function (i,elem) {
        if (elem != e.target) $(elem).removeClass('in');
      });
});


//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-34361385-1']);
_gaq.push(['_setDomainName', 'uncg.edu']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();