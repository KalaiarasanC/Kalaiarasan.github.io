
        
$(' ul li a').click(function(){
	$('ul li a').removeAttr('id');
	$(this).attr('id','now');
	console.log(this.id);
	$('html, body').animate({scrollTop:$($(this).attr('href')).position().top}, 'slow');
});

$('.navbar-brand').click(function(){
$('html, body').animate({scrollTop:$('#top').position().top}, 'slow');
});


