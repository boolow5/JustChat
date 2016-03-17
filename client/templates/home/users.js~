Template.allUsers.helpers({
	'allUsers': function () {
		Meteor.subscribe('allUsers');
		return Meteor.users.find().fetch();
	}
});

Template.onlineUsers.helpers({
	'onlineUsers': function() {
		Meteor.subscribe('onlineUsers');
	  return Meteor.users.find({ "status.online": true, _id: {$ne: Meteor.userId()} }).fetch();
	}, 
	'notes': function () {
		Meteor.subscribe('notes');
		return Notes.find().fetch();
	}
});

Template.onlineUsers.events({
	'click span.deleteNote': function (event) {
		console.log('deleting a new note');
	}
});

Template.chatWithUser.helpers({
	'data': function () {
		receiver = Router.current().params.userID
		
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
		
		$("#display-for-"+receiver).animate({ scrollTop: $("#display-for-"+receiver)[0].scrollHeight}, 1000);

	}
});

