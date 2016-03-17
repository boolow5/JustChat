getFriend = function (friendId) {
		console.log('Getting a friend ' + friendId);
		var friend = Friends.find({_id:friendId}).fetch();
		console.log('Friend')
		console.log(friend);
		//return friend.emails[0].address; 
	}
	
shortenUsername = function (email) {
	return email.split('@')
}
