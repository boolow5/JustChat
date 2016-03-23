Template.allUsers.helpers({
	'allUsers': function () {
		Meteor.subscribe('allUsers');
		var me = Meteor.userId();
		return Meteor.users.find({_id:{$not:me}}).fetch();
	}
});

Template.onlineUsers.helpers({
	'onlineUsers': function() {
		Meteor.subscribe('onlineUsers');
	  return Meteor.users.find({ "status.online": true, _id: {$ne: Meteor.userId()} }).fetch();
	}
});

Template.chatWithUser.helpers({
	'data': function () {
		receiver = Router.current().params.userID
		Meteor.subscribe("allUsers");
		return {
			'messages': function () {
				Meteor.subscribe('messages');

				//return Conversations.find({"between":receiver}).fetch();
				return Messages.find({between:receiver}).fetch();
			},
			'otherUserId':function () {
				receiver = Router.current().params.userID;
				return userID;
			}
		}
	},
	'otherEmail':function () {
		Meteor.subscribe("allUsers");
		ema = Meteor.users.find({_id:userID}).fetch()[0].emails[0].address;
		if (ema) return ema;
	},
	'isMe':function (userId) {
		//return userId ==	Meteor.userId();
		//return true;
		me = Meteor.userId()
		console.log("Me "+me);
		console.log("other "+userId);
		if (userId== me) {
			return "me"
		}else {
			return "Him/Her"
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

		//Trying to inform the other user I've sent a message to him/her

		//console.log(userNotifications);

		console.log("Message: "+message+"\nReceiver: "+receiver);
		console.log(Router.current().params.userID);

		$("#display-for-"+receiver).animate({ scrollTop: $("#display-for-"+receiver)[0].scrollHeight}, 1000);

	}
});

Template.addUsers.helpers({
	'email': function(){
		return Router.current().params.email;
	}
})
