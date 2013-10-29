$(document).ready(function(){
	$(".N").mouseover(function(){
		if(!$(".detail_1_N").is(":animated")){
			$(".detail_1_N").animate({width:"show"},200,function(){
				$(".detail_2_N").slideDown(150);
				$(this).children("p").fadeIn(150);
				
			});
		}
	});


	$(".N").mouseout(function(){
		if($(".detail_1_N").is(":animated")) 
			$(".detail_1_N").stop(false,true);
		if($(".detail_2_N").is(":animated")) 
			$(".detail_2_N").stop(false,true);
		$(".detail_1_N").css("display","none");
		$(".detail_2_N").css("display","none");
		$("detail_1_N").children("p").css("display","none");
	});
});

$(document).ready(function(){
	$(".Y").mouseover(function(){
		if(!$(".detail_1_Y").is(":animated")){
			$(".detail_1_Y").animate({width:"show"},200,function(){
				$(".detail_2_Y").slideDown(150);
				$(this).children("p").fadeIn(150);
				
			});
		}
	});


	$(".Y").mouseout(function(){
		if($(".detail_1_Y").is(":animated")) 
			$(".detail_1_Y").stop(false,true);
		if($(".detail_2_Y").is(":animated")) 
			$(".detail_2_Y").stop(false,true);
		$(".detail_1_Y").css("display","none");
		$(".detail_2_Y").css("display","none");
		$("detail_1_Y").children("p").css("display","none");
	});
});



$(document).ready(function(){
	$(".H").mouseover(function(){
		if(!$(".detail_1_H").is(":animated")){
			$(".detail_1_H").animate({width:"show"},200,function(){
				$(".detail_2_H").slideDown(150);
				$(this).children("p").fadeIn(150);
				
			});
		}
	});


	$(".H").mouseout(function(){
		if($(".detail_1_H").is(":animated")) 
			$(".detail_1_H").stop(false,true);
		if($(".detail_2_H").is(":animated")) 
			$(".detail_2_H").stop(false,true);
		$(".detail_1_H").css("display","none");
		$(".detail_2_H").css("display","none");
		$("detail_1_H").children("p").css("display","none");
	});
});


$(document).ready(function(){
	$(".M").mouseover(function(){
		if(!$(".detail_1_M").is(":animated")){
			$(".detail_1_M").animate({width:"show"},200,function(){
				$(".detail_2_M").slideDown(150);
				$(this).children("p").fadeIn(150);
				
			});
		}
	});


	$(".M").mouseout(function(){
		if($(".detail_1_M").is(":animated")) 
			$(".detail_1_M").stop(false,true);
		if($(".detail_2_M").is(":animated")) 
			$(".detail_2_M").stop(false,true);
		$(".detail_1_M").css("display","none");
		$(".detail_2_M").css("display","none");
		$("detail_1_M").children("p").css("display","none");
	});
});

