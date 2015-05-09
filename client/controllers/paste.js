Template.paste.helpers({
	paste: function () {
		var data = Pastes.findOne(Router.current().params._id);
		var hash = Router.current().params.hash;
		console.log(data);
		if(hash) {
			data.paste = CryptoJS.AES.decrypt(data.paste, hash).toString(CryptoJS.enc.Utf8);
		}
		return data;
	}
});