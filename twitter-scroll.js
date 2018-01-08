//Twitter DM Scroll Top
var aa = setInterval(function(){
	$('.DMConversation-scrollContainer').finish().animate({scrollTop:0},1000);
},1000);

//Stop DM Scroll Top
clearInterval(aa);

//Twitter Timeline Scroll Bottom
var bb = setInterval(function(){
	$('body,html').finish().animate({scrollTop:$("#timeline").height()},1000);
},1000);

//Stop Scroll Bottom
clearInterval(bb);
