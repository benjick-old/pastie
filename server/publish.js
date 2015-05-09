Meteor.publish("paste", function (pasteId) {
	check(pasteId, String);
	return Pastes.find({_id: pasteId})
});