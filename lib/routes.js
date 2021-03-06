Router.route('/', {
	template: 'main'
});

Router.route('/paste', {
	name: 'create',
});

Router.route('/paste/:_id', {
	name: 'paste',
	waitOn: function () {
		return Meteor.subscribe('paste', this.params._id);
	},
	data: function () {
		return Pastes.findOne(this.params._id);
	}
});

Router.configure({
	layoutTemplate: 'layout',
});