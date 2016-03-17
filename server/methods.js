Meteor.methods({
	'sendMessage': function (mObj) {
		var receiver = mObj.receiver;
		var sender = Meteor.userId();
		var message = mObj.message;
		
		Messages.insert({'message': message, 'sender':sender, 'receiver':receiver, timeSent:new Date()});
		
		Notes.insert({to: receiver, from: sender, title: "Your received a new message "});
		console.log("message sent from server");
		console.log(Messages.find().count());
	},
	'deleteNotice': function (noteId) {
		Notes.delete({_id:noteId});
	}
});