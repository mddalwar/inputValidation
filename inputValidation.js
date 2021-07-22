const lengthValidate = ( element = null,  args = {} ) => {
	var initParameters = { minNumber : 5, maxNumber : 10 };
	var parameters = Object.assign( initParameters, args );

	if( element != null) {
			$(element).wrap('<div class="dInput-wrapper"></div>');
			$(element).after('<span class="msg"></span>');
			$(element).addClass('dInput');

			$(element).on( 'keyup', function (){
				var inputText = $(this),
					textLength = inputText.val();

				if( textLength.length < parameters.minNumber ){
					inputText.next('span').removeClass('valid').addClass('inValid').text('Minimum ' + parameters.minNumber + ' charecters is required !');

					inputText.closest("form").attr('onsubmit', 'return false; ');

				}else if( textLength.length > parameters.maxNumber ){
					inputText.next('span').removeClass('valid').addClass('inValid').text('Maximum ' + parameters.maxNumber + ' charecters is acceptable !');
					inputText.closest("form").attr('onsubmit', 'return false; ');
				}else{
					inputText.next('span').removeClass('inValid').addClass('valid').text('Your text is perfect !');
					inputText.closest("form").removeAttr('onsubmit');
				}
			});

	}else {
		return 'Length validation element not defined';
	}
}