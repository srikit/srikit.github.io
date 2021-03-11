$('#subscribeform').submit(function(){

	var action = $(this).attr('action');
	$("#mesaj").slideUp(750,function() {
		$('#mesaj').hide();
		$('#subsubmit')
			.after('')
			.attr('disabled','disabled');

		$.post(action, {
			email: $('#subemail').val()
		},

		function(data){
			document.getElementById('mesaj').innerHTML = data;
			$('#mesaj').slideDown('slow');
			$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});
			$('#subsubmit').removeAttr('disabled');
			if(data.match('success') != null) $('#subscribeform').slideUp('slow');
		}
		
		);
	});

	return false;
});

// Fill copyright statement at the bottom of the page (with current year).
$(window).on("load", function() {
	var currentYear = ((new Date).getFullYear()).toString();
	$('#copyright').text(("\u00A9 2020 - " + currentYear + " SriKIT Contributors."));
});
