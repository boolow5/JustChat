Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', function(){
	this.render('homeIndex')
	
});
	
Router.route('/friends', function(){
	this.render('homeFriends');
});

Router.route('/friends/all', function(){
	this.render('homeAllFriends');
});

Router.route('/chat/:recieverId', function(){
	this.render('homeChat');
});

Router.route('/contact', function(){
	this.render('contact');
});


Router.route('/about', function(){
	this.render('about');
});

