/*

click on an element on your page to change the background color.

click on an element on your page to make another element fade out.

hover on an image on your page to replace it with another image

*/


//when you click on a div with the class "menu"
$(".menu").click(function(){



	$(this).toggleClass("open");

	// if ( $(this).hasClass("open") ) { 	//this menu is already open
	// 	$(this).removeClass("open")		//remove the "open" class
	// } else {		//otherwise it isn't open
	// 	$(this).addClass("open")	//add the "open" class
	// }

	
})



//when you click on any paragraph execute the following function (aka block of code)
$(".p2").click(function(){

	//change the background color to blue
	$(this).css({"background":"blue"})



})