Meteor.methods({
	'sendMessage': function (mObj) {
		var receiver = mObj.receiver;
		var sender = Meteor.userId();
		var message = mObj.message;
		var convers = mObj.coversId;

		//Messages.insert({'message': message, 'sender':sender, 'receiver':receiver, timeSent:new Date()});
		Messages.insert({'message': message, between:[sender, receiver], timeSent:new Date(), senderId: sender});
		//Conversations.update({between:{$in: [sender, receiver]}},{"$push":{"messages":{"date":new Date(), "text":message, "sender":sender}}},{upsert:true});
	},
	'addFriend': function (email) {
		console.log("Adding email: "+ email +" to your friends....");
		me = Meteor.userId();
		friends = Friends.find({_id:me}).fetch();
		if(!friends.length){
			console.log("there is no friends");
		}else {
			console.log("There is some friends");
		}
	}
});
