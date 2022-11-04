//box1 {
//  background-color: #FF0000;
//  height: 200px;
//  width: 200px;
//}

//$(function(){
//  $('.box1').css({
//    'background-color': '#0000FF',
//    'height': '100px'
//  });
//});

//$(document).ready(function() {
// $(".box1").show();
// $(".box1").css({"background-color":"#0000FF"});
//});

//$(function(){
// $(".box1").hide();
//});

$(function(){
 $(".box1").slideDown(function(){
 $(".box1").css({
 'background-color': '#0000FF',
 'height': '100px'
 });
 $(".box1").slideUp();
 });
});