$(window).scroll(function(){
	const wScroll = $(this).scrollTop();
	//console.log(wScroll);

	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /2+'%)'
	});

	$('.back-bird').css({
		'transform' : 'translate(0px, '+ wScroll /4 +'%)'
	});

	$('.fore-bird').css({
		'transform': 'translate(0px, -' + wScroll / 40 + '%)'
	});

	if(wScroll > $('.clothes-pics').offset().top - ($(window).height()/1.2)) {
		$('.columns.four').each(function(i){
			setTimeout(function(){
				$('.columns.four').eq(i).addClass('is-showing');
			}, 150 * (i+1));
		});
	}

	if (wScroll > $('.large-window').offset().top - $(window).height()){
		$('.large-window').css({ 'background-position': 'center ' + (wScroll - $('.large-window').offset().top) +'px'});
		const opacity = (wScroll - $('.large-window').offset().top+400)/ (wScroll/5) 
		$('.window-tint').css({'opacity': opacity})

	}

	if (wScroll > $('.large-window').offset().top - $(window).height()) {
		const offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height()-350);
		$('.post-1').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

		$('.post-3').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset* 0.2) + 'px)' });

	
	}



});