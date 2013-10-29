var time;
var opacity = 1;
var i = 0;


function start(){
	const circleX = (window.screen.availWidth)/2;
	const  circleY = (window.screen.availHeight)/2;
	const radius = circleX/3;
	var left = circleX-65-radius*Math.cos(Math.PI*i/1000);
	var top = circleY-65-radius*Math.sin(Math.PI*i/1000);
	$(".startBall").css("left",left);
	$(".startBall").css("top",top);

	$("document").ready(function(){
		$(".start").css("opacity",opacity);

		i += 10;	
		opacity -= 0.005;
		$(".start").css("opacity",opacity);
		if(i>2000) 	{
			clearTimeout(t);
			$(".start").css("display","none");
		}
		else t = setTimeout("start()",10);


	});
}
