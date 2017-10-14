document.addEventListener('DOMContentLoaded', function(){
	if(window.location.protocol.substr(0,5) == 'https'){
		console.log('This web works with HTTPS');
		var form = this.querySelector('form#genForm.nevow-form');
		if(form){
			var formAction = form.action;
			if(formAction.substr(0,5) == 'http:'){
				formAction = 'https' + formAction.substr(4);
				this.querySelector('form#genForm.nevow-form').action = formAction;
			}
		}
	}else if(window.location.protocol.substr(0,4) == 'http'){
		console.log('This web works with HTTP');
	}
});
