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

});