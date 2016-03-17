Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', function(){
	this.render('onlineUsers');
	
});
	
Router.route('/users', function(){
	this.render('allUsers');
});

Router.route('/friends/all', function(){
	this.render('homeAllFriends');
});

Router.route('/chat/:userID', function(){
	userID = this.params.userID;
	console.log("User Id: " + userID);
	this.render('chatWithUser');
	onAfterAction= function () {
		//scrolls the message display to the bottom
		$("#display-for-"+receiver).animate({ scrollTop: $("#display-for-"+receiver)[0].scrollHeight}, 1000);
	}
});

Router.route('/contact', function(){
	this.render('contact');
});


Router.route('/about', function(){
	this.render('about');
});

