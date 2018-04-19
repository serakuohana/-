$(function(){
  var slider = "#slider"; // スライダー
  var thumbnailItem = "#thumbnail-list .thumbnail-item"; // サムネイル画像アイテム

  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItem).each(function(){
   var index = $(thumbnailItem).index(this);
   $(this).attr("data-index",index);
  });

  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(slider).on('init',function(slick){
   var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
   $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });

  //slickスライダー初期化
  $(slider).slick({
    autoplay: true,
    arrows: true,
    prevArrow: '<img src="images/arrow_left.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images/arrow_right.png" class="slide-arrow next-arrow">',
    fade: true,
    infinite: true //これはつけましょう。
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });

  //サムネイル画像のカレントを切り替え
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnail-current").removeClass("filter").css("filter","brightness(0.3)");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current").removeClass("filter").css("filter","brightness(1)");
  });
});


//タブ//
$(function(){
    $('#news div[id != "tab1"]').hide();

    // タブをクリックすると
    $("a").click(function(){
        // 一度全てのコンテンツを非表示にする
        $("#news div").hide();

        // 次に選択されたコンテンツを再表示する
        $($(this).attr("href")).show();

        // 現在のcurrentクラスを削除
        $(".current").removeClass("current");

        // 選択されたタブ（自分自身）にcurrentクラスを追加
        $(this).addClass("current");


        return false;
    });

});
