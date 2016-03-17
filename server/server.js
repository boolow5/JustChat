Meteor.publish('allUsers', function () {
	return Meteor.users.find({});
});

Meteor.publish("onlineUsers", function() {
  return Meteor.users.find({ "status.online": true }, { fields: { ... } });
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