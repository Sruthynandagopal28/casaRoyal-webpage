// slider
function carouselSlider(){
    var currentIndex = $(this).index();
    var slideValue = currentIndex * 100;
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.agents_container').css('transform','translateX(-' + slideValue + '%)');
} 
$('.bullets').on('click', carouselSlider);


var i = 0;
var j = 0;
var quote_index = $('.quotes_container:last').index();
var agent_index = $('.element_div:last').index();
function leftSlider(){
    if(i > 0){
        var qslideValue = (--i) * 100;
        $('.quotes').css('transform','translateX(-' + qslideValue + '%)');
    } 
}
$('.left').on('click', leftSlider);

function rightSlider(){
    if(i < quote_index){
        var qslideValue = (++i) * 100;
        $('.quotes').css('transform','translateX(-' + qslideValue + '%)');
    } 
}
$('.right').on('click', rightSlider);


function left(){
    if(j > 0){
        var aslideValue = (--j) * 100;
        $('.agents_container').css('transform','translateX(-' + aslideValue + '%)');
    }
}
$('.left_arrow').on('click', left);

function right(){
    if(j < agent_index){
        var aslideValue = (++j) * 100;
        $('.agents_container').css('transform','translateX(-' + aslideValue + '%)');
    }
}
$('.right_arrow').on('click', right);

// dropdown function
$(".dropdown a").click(function(event){
    event.stopPropagation();
    $(this).next().slideToggle();
});
$(document).on("click", function(event){
    var $dropdown = $(".dropdown a");
    if($dropdown !== event.target && !$dropdown.has(event.target).length){
        $(".dropdown_list").slideUp();
    }    
});   


// for getting the text value in dropdown
$(".dropdown_list li").click(function(){
    var dropval = $(this).text();
    $(this).parents('.dropdown').children('a').text(dropval);
    $(this).parent('ul').slideUp();
});

$(".dropdown p").click(function(event){
    event.stopPropagation();
    $(this).next().slideToggle();
});
$(document).on("click", function(event){
    var $dropdown = $(".dropdown p");
    if($dropdown !== event.target && !$dropdown.has(event.target).length){
        $(".dropdown_list").slideUp();
    }    
});   


// for getting the text value in dropdown
$(".dropdown_list li").click(function(){
    var dropval = $(this).text();
    $(this).parents('.dropdown').children('p').text(dropval);
    $(this).parent('ul').slideUp();
});

// menu bar 
$(".menu-bar").click(function(){
    $("header").toggleClass('nav_open');
});
