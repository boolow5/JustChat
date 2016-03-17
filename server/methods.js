Meteor.methods({
	'sendMessage': function (mObj) {
		var receiver = mObj.receiver;
		var sender = Meteor.userId();
		var message = mObj.message;
		
		Messages.insert({'message': message, 'sender':sender, 'receiver':receiver, timeSent:new Date()});
		console.log("message sent from server");
		console.log(Messages.find().count());
	}
});