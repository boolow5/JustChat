UI.registerHelper("shortenUsername", function (email) {
	if (email){
		return email.split('@')[0];
	}
});

UI.registerHelper("getUser", function (userId) {
	if (userId==this.userId){
		console.log("It's me");
	}else {
		user = Meteor.users.find({_id:userId}).fetch();
		if (user.length===1) {
			return user[0].emails[0];//.address.split('@')[0];
		}
	}
});

UI.registerHelper("getTimeOnly", function (dateTime) {
	var hours = dateTime.getHours();
	var min = dateTime.getMinutes();
	var sec = dateTime.getSeconds();
	return ""+hours+":"+min+":"+sec;
});

UI.registerHelper("getMe", function () {
	return Meteor.userId();
});

UI.registerHelper("getNotes", function () {
	// but the code for notifying user
	var startDate = new Date();
	var endDate = new Date();
	endDate.setSeconds(startDate.getSeconds() + 10);
	var message;
	Meteor.call("notifications/receivedMessage/getAll", Meteor.userId(), startDate, endDate (optional), function(err, res) {
		// your callback function here
		message = res;
	});
	return message;
});
