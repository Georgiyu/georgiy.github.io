$(document).ready(function(){
	 $('.menu-btn').on('click', function(){
    $('.menu-block').toggleClass('menu_block_active');
 });
 $('.menu-btn').on('click', function(e){
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
 });
  });
