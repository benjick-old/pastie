Template.create.events({
	'submit': function (event) {
		event.preventDefault();
		if(event.target.password.value === '') {
			paste = event.target.paste.value;
		}
		else {
			paste = CryptoJS.AES.encrypt(event.target.paste.value, event.target.password.value).toString();
		}
		Pastes.insert({
			paste: paste,
			title: event.target.title.value
		}, function (err, id) {
			if(!err) {
				if(event.target.password.value === '') {
					Router.go('paste', {
						_id: id
					});
				}
				else {
					Router.go('paste', { _id: id }, {hash: event.target.password.value});
				}
			}
		});
	}
});