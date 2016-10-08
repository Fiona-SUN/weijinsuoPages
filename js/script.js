/**
 * Created by FIONA on 2016/10/8/008.
 */
$(function(){

    $("#quick_btn2").on("click",function(){
        $("#quick_menu2").slideToggle();
    })

    $("#navTabs li a").on('mouseenter',function () {
        var txt = $(this).find(".nav-text").text();
        $("#news_title").text(txt);
    })

    $("#navTabs").on('mouseleave',function(){
        var txt = $('#navTabs .active a').find(".nav-text").text();
        $("#news_title").text(txt);
    })

})