$(".p1").hover(function(){
			$(this).addClass("clicked1")
		},function(){
			$(this).addClass("clicked2");
			$(".p2").addClass("clicked1")

		});

		$(".p2").hover(function(){
			$(this).addClass("clicked2")
		});
