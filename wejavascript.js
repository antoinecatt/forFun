$(function() {
	$('#box-1').on('click',function(){
		$(this).toggleClass('red');	
	});

	$('#box-2').css('display', 'none').fadeIn(1000, function(){
		$(this).on('click',function() {
			$(this).fadeOut(1000);
		});
	})


	$('#btn').click(function () {
	  	$('ul').append('<li>hello</li>');          
	});

});
