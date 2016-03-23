Template.onlineusers.helpers({
  'users': function (){
    Meteor.subscribe("onlineUsers");
    var me = Meteor.userId();
    return Meteor.users.find({_id:{$ne:me}});
  }
});
