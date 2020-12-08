


$(document).tooltip()


var hoverTimes = 0;
$(".s2").mouseover(function(){
	//hovertimes = hovertimes+1;
	hoverTimes++;

	if (hoverTimes == 4) {

		$(document).scrollTo(1500,2000)

	}

	console.log("hovered times: "+hoverTimes)
})




//alert to console.log
console.log("testing")


//menu click (add open class)


$(".menu").click(function(){
	$(".menu").toggleClass("open")
})




$(".double").hover(function(){
	$(".another").addClass("shapeShift")
}, function(){
	$(".another").removeClass("shapeShift")
})


// $(document).mousemove(function(e){
// 	console.log()
// 		$(".another").css({
// 		"transform":"rotate("+e.clientY/5+"deg)"
// 	})
// })


$(document).scroll(function(){

	//create a variable which calculated how far from the top we have scrollled
	var ft = parseInt($(document).scrollTop());
	
	//puts that number into another variable which is the rotate value of the css transform property
	var rA = "rotate("+ft+"deg)"

	//rotates a div on scroll
	$(".another").css({
		"transform":rA
	})


	//dumps scroll distance into the menu div
	$(".menu").html("you have scrolled " + ft + " pixels so far")
})


function hello(name) {
	name = "Hallo, "+name;
	return name;
}






/*





double hover (change another... css then shapeshift class.)

scroll  rotate element (calculate var) add var to menu.

make array variable of people, then random. then bottom.


Rima Al Moman, 
Ben Bonsu,
Edward Chan,
Jason Cheng,
Sydney Cooling-Sturges,
Nikita Dorokhov,
Max Fine,
Oleg Gorlenko,
Hadas Green,
Wenjing Hong,
Jasmine Khnanishoo,
Henry McGuire,
Ajay Naraindas,
Ayomide Olagbemi,
Justine Orbovic,
Xuejun Pei,
Theo Richardson,
Connor Shopa,
Chance Snow-Shermet,
Ge Song,
Schylar Van Den Helm,
Tim Yim,
Anna Lucia Zablah, 
Jun Zhang,Shu 
Haocheng Zhao,
Wenyue Zheng,
Eric Zhou

*/




