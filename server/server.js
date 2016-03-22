Meteor.publish('allUsers', function () {
	return Meteor.users.find({});
});

Meteor.publish("onlineUsers", function() {
  return Meteor.users.find({ "status.online": true });
});

Meteor.publish("messages", function () {
	var me = this.userId;
	//return Conversations.find({"between":me})  //
	//return Messages.find({$or: [{sender: me}, {receiver: me}] });
	return Messages.find({between:me });
});

/*
//If you want to do some action if user login or logout.
Meteor.users.find({ "status.online": true }).observe({
  added: function(id) {
    // id just came online
  },
  removed: function(id) {
    // id just went offline
  }
});
*/
