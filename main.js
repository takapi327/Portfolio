window.onload = ()=>{
  
  let tab = document.getElementsByClassName('btn');

  tabsAry = Array.prototype.slice.call(tab);

  function tabSwich(){
    document.getElementsByClassName("active")[0].classList.remove("active");

    this.classList.add("active");

    document.getElementsByClassName("show")[0].classList.remove("show");

    const index = tabsAry.indexOf(this);
    
    document.getElementsByClassName("content")[index].classList.add("show");
  }

  tabsAry.forEach(function(value){
    value.addEventListener("click", tabSwich);
  });
 
  function getScrolled() {
    return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
  }

  let btn = document.getElementById('page_top');

  function scrollToTop() {
    var scrolled = getScrolled();
    window.scrollTop( 0, Math.floor( scrolled / 2 ) );
    if ( scrolled > 0 ) {
      window.setTimeout( scrollToTop, 300 );
    }
  };

  btn.onclick = function() {
    scrollToTop();
  };
}