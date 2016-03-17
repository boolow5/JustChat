Template.allUsers.helpers({
	'allUsers': function () {
		return Meteor.users.find().fetch();
	},
	'onlineUsers': function() {
	  return Meteor.users.find({ "status.online": true }).fetch();
	};
});

