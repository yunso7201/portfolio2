$(function(){
	var w;
	var h;
	var t=0;
	var n=0;

	$(window).resize(function(){
		w=$(window).width();
		h=$(window).height();
		t=(-1)*n*h;
		$(".category").css({"top":t});

		$(".category .page").css({"width": w, "height": h});
		$(".aside li").removeClass("on");
		$(".aside li").eq(n).addClass("on");
	});
	$(window).trigger("resize");

	$("#GNB li a").eq(0).addClass("on");

	$("#GNB li a, .aside li a, #header .nav li a").click(function(e){
		e.preventDefault();
		n=$(this).parent().index();
		dolayout();
	});

	$(window).keydown(function(e){
		if($(".category").is(":animated") == true){
			return;
		}

		if(e.keyCode == 40 || e.keyCode == 98){
			if(n < 9){
				n++;
			}
		}
		if(e.keyCode == 38 || e.keyCode == 104){
			if(n > 0){
				n--;
			}
		}

		dolayout();
	});

	$(".wrapper").mousewheel(function(e, delta){
		if($(".category").is(":animated") == true){
			return;
		}

		if(delta < 0){
			if(n < 9){
				n++;
			}
		}
		else{
			if(n > 0){
				n--;
			}
		}

		dolayout();
	});

	function dolayout(){
		t=(-1)*n*h;
		$(".category").animate({"top":t}, 500);
		if(n < 4){
			$(".aside li").removeClass("on");
			$(".aside li").eq(n).addClass("on");
			$("#header .nav li a").removeClass("on");
			$("#header .nav li a").eq(n).addClass("on");
		}
		else{
			$(".aside li").removeClass("on");
			$(".aside li").eq(4).addClass("on");
			$("#header .nav li a").removeClass("on");
			$("#header .nav li a").eq(4).addClass("on");
		}
		if(n == 0){
			$("#header .nav").removeClass("on");
		}
		else{
			$("#header .nav").addClass("on");
		}
	}

	$(".profile .sec li:nth-child(1) h5").click(function(){
		$(".profile .sec h5").removeClass("on");
		$(this).addClass("on");
		$(".profile .sec .skills").show();
		$(".profile .sec .exp").hide();
		$(".profile .sec .edu").hide();
	});
	$(".profile .sec li:nth-child(2) h5").click(function(){
		$(".profile .sec h5").removeClass("on");
		$(this).addClass("on");
		$(".profile .sec .skills").hide();
		$(".profile .sec .exp").show();
		$(".profile .sec .edu").hide();
	});
	$(".profile .sec li:nth-child(3) h5").click(function(){
		$(".profile .sec h5").removeClass("on");
		$(this).addClass("on");
		$(".profile .sec .skills").hide();
		$(".profile .sec .exp").hide();
		$(".profile .sec .edu").show();
	});
});
