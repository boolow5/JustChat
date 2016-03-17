Template.allUsers.helpers({
	'allUsers': function () {
		Meteor.subscribe('allUsers');
		return Meteor.users.find().fetch();
	}
});

Template.onlineUsers.helpers({
	'onlineUsers': function() {
		Meteor.subscribe('onlineUsers');
	  return Meteor.users.find({ "status.online": true }).fetch();
	}
});

Template.chatWithUser.helpers({
	'data': function () {
		return {
			'messages': function () {
				Meteor.subscribe('messages');
				return Messages.find().fetch();
			},
			'otherUserId':function () {
				return userID;
			}
		}
	}
});

Template.chatWithUser.events({
	'submit form.send-message': function (event) {
		event.preventDefault();
		message = event.target.messageText.value;
		event.target.messageText.value = '';
		receiver = Router.current().params.userID
		Meteor.call('sendMessage', {'receiver':receiver, 'message':message});
		console.log("Message: "+message+"\nReceiver: "+receiver);
		console.log(Router.current().params.userID);
	}
});