function contextPlace(){
	$(document).ready(function(){
		var circleTop;
		var circleLeft;
		const radius = 200;
		circleTop = 190 - radius*Math.cos(Math.PI/5);
		circleLeft = 90 + radius*Math.sin(Math.PI/5);
		$(".CircleN").css("top",circleTop);
		$(".CircleN").css("left",circleLeft);

		circleTop = 190 - radius*Math.cos(Math.PI/5*2);
		circleLeft = 90 + radius*Math.sin(Math.PI/5*2);
		$(".CircleY").css("top",circleTop);
		$(".CircleY").css("left",circleLeft);

		circleTop = 190 - radius*Math.cos(Math.PI/5*3);
		circleLeft = 90 + radius*Math.sin(Math.PI/5*3);
		$(".CircleH").css("top",circleTop);
		$(".CircleH").css("left",circleLeft);

		circleTop = 190 - radius*Math.cos(Math.PI/5*4);
		circleLeft = 90 + radius*Math.sin(Math.PI/5*4);
		$(".CircleM").css("top",circleTop);
		$(".CircleM").css("left",circleLeft);
	});
};
