Template.create.events({
	'submit': function (event) {
		event.preventDefault();
		if(event.target.password.value === '') {
			paste = event.target.paste.value;
		}
		else {
			paste = CryptoJS.AES.encrypt(event.target.paste.value, event.target.password.value).toString();
		}
		//console.log(paste);
		Pastes.insert({
			paste: paste,
			title: event.target.title.value
		}, function (err, id) {
			if(!err) {
				if(event.target.password.value === '') {
					Router.go('/paste/' + id);
				}
				else {
					Router.go('/paste/' + id + '#password=' + event.target.password.value);
				}
			}
			console.log(id);
		});
	}
});