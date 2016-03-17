UI.registerHelper("shortenUsername", function (email) {
	return email.split('@')[0];
});

UI.registerHelper("getUser", function (userId) {
	user = Meteor.users.find({_id:userId}).fetch();
	if (user.length===1) {
		return user[0].emails[0].address.split('@')[0];
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
