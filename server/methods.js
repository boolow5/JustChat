Meteor.methods({
	'sendMessage': function (mObj) {
		var receiver = mObj.receiver;
		var sender = Meteor.userId();
		var senderDetail = Meteor.users.findOne({_id:sender});
		var senderEmail;
		if (senderDetail.emails){
			senderEmail = senderDetail.emails[0].address;
		}
		var message = mObj.message;
		var convers = mObj.coversId;

		//Messages.insert({'message': message, 'sender':sender, 'receiver':receiver, timeSent:new Date()});
		Messages.insert({'message': message, between:[sender, receiver], timeSent:new Date(), sentBy:senderEmail});
		//Conversations.update({between:{$in: [sender, receiver]}},{"$push":{"messages":{"date":new Date(), "text":message, "sender":sender}}},{upsert:true});
	},
	'addFriend': function (email) {
		me = Meteor.users.findOne({_id:Meteor.userId()});
		otherUser = Meteor.users.findOne({"emails.address":email});
		if (otherUser._id){
			Meteor.users.update({_id:me._id},{$push:{"friends":otherUser._id}},{upsert:true});
			Meteor.users.update({_id:otherUser._id},{$push:{"friends":me._id}},{upsert:true});
		}
	}
});
