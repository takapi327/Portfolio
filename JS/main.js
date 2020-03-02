window.onload = ()=>{
  $(function(){
    var effect_pos = 250; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 50; // どのぐらい要素を動かすか(px)
    var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000
  
    // フェードする前のcssを定義
    $('.profile').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });
  
    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;
  
        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.profile').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
  });

  $(function(){
    $(window).scroll(function (){
        $('.front').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 300){
                $(this).addClass('scrollin');
            }
        });
    });

  // アイコンのフェードインイベント
  var effect_btm = 300; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.sublist').css({
      opacity: 0
  });
  $('.sublist').children().each(function(){
      $(this).css({
          opacity: 0,
          transform: 'translateY('+ effect_move +'px)',
          transition: effect_time + 'ms'
      });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      var effect_pos = scroll_btm - effect_btm;

      //エフェクトが発動したとき、子要素をずらしてフェードさせる
      $('.sublist').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
              $(this).children().each(function(i){
                  $(this).delay(100 + i*200).queue(function(){
                      $(this).css({
                          opacity: 1,
                          transform: 'translateY(0)'
                      }).dequeue();
                  });
              });
          }
      });
  });
  });
  function addSticky() {
    $('.slide').each(function() {
      var scrollerAnchor = $(this).offset().top;
      if (window.scrollY >= scrollerAnchor) {
        $(this).addClass('fix-it');
      } else {
        $(this).removeClass('fix-it');
      }
    });
  }
  
  $(window).scroll(function() {
    addSticky();
  });

  mouseOn();
  mouseOff();

var window_h = $(window).height();
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $(".data").each(function() {
    var elem_pos = $(this).offset().top;
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+500) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });
});
}

//マウスオーバー時の処理
function mouseOn(){
  var obj = document.getElementById("img");
  obj.src = "images/Fmarket.gif";
  var obj2 = document.getElementById("img2");
  obj2.src = "images/Pokemon1.gif";
  var obj3 = document.getElementById("img3");
  obj3.src = "images/skill-up_language.gif";
}

//マウスアウト時の処理
function mouseOff(){
  var obj = document.getElementById("img");
  obj.src = "images/Fmarket.jpg";
  var obj2 = document.getElementById("img2");
  obj2.src = "images/Pokemon.png";
  var obj3 = document.getElementById("img3");
  obj3.src = "images/test.png";
}
