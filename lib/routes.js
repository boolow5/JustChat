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
	this.data = function () {
		console.log("getting user data...");
		return {
			'messages': function () {
				Meteor.subscribe('messages');
				return [1,2,3,4,5]//Messages.find().fetch();
			},
			'otherUserId':function () {
				return userID;
			}
		}
	}
});

Router.route('/contact', function(){
	this.render('contact');
});


Router.route('/about', function(){
	this.render('about');
});

