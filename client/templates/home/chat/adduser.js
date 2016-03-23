Template.adduser.events({
  'submit .add-user-friend':function(event){
    event.preventDefault();
    var email = event.target.email.value;
    Meteor.call("addFriend", email, function(error, result){
      if (!error){
        console.log("added " + email + " successfully!");
        $("#flash-message span").text("if "+email+" is valid user he/she will be added to your friends");
      }
    });
  }
});
