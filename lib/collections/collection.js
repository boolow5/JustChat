Messages = new Mongo.Collection('messages');
Conversations = new Mongo.Collection('conversations');
/*
//Recording a new message to the DB
Conversations.update({},
  {
    between: [],
    {$push :
        {messages:
          date: new Date(),
          text: messageText
        }
    },
    {upset: true}
  }
);
*/

Friends = new Mongo.Collection('friends');


/*
//Adding new Friend to your friend list
Friends.update({},
  {$push: { pending: newFriend}
  },
  {upsert: true}
);

//Adding a friend request to other friends' list
Friends.update({},
  {$push: { request: newFriend}
  },
  {upsert: true}
);

//Accepting a new friend to you friends list
Friends.update({},
  {
    {$push: { accepted: newFriend }},
    {$pop: { pending: newFriend }},
    {$pop: { requested: newFriend }}
  },
  {upsert: true}
);

*/
