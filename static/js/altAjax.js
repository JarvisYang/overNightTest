$(document).ready(function(){
	$(".alt_1").click(function(){
		$(".altShowBg").css("display","inline-block");
		html=$.ajax({url:"../static/XML/alt_1.html",async:false,dataType:"HTML"});
		$(".altShow").html(html.responseText);
	});

	$(".exit").click(function(){
		$(".altShowBg").css("display","none");
	});

	$(".alt_2").click(function(){
		$(".altShowBg").css("display","inline-block");
		html=$.ajax({url:"../static/XML/alt_2.html",async:false,dataType:"HTML"});
		$(".altShow").html(html.responseText);
	});

	$(".exit").click(function(){
		$(".altShowBg").css("display","none");
	});

	$(".alt_3").click(function(){
		$(".altShowBg").css("display","inline-block");
		html=$.ajax({url:"../static/XML/alt_3.html",async:false,dataType:"HTML"});
		$(".altShow").html(html.responseText);
	});

	$(".exit").click(function(){
		$(".altShowBg").css("display","none");
	});

	$(".alt_4").click(function(){
		$(".altShowBg").css("display","inline-block");
		html=$.ajax({url:"../static/XML/alt_4.html",async:false,dataType:"HTML"});
		$(".altShow").html(html.responseText);
	});

	$(".exit").click(function(){
		$(".altShowBg").css("display","none");
	});

	$(".alt_5").click(function(){
		$(".altShowBg").css("display","inline-block");
		html=$.ajax({url:"../static/XML/alt_5.html",async:false,dataType:"HTML"});
		$(".altShow").html(html.responseText);
	});

	$(".exit").click(function(){
		$(".altShowBg").css("display","none");
	});
});



