import { Meteor } from 'meteor/meteor';
import { Posts } from'../imports/api/posts.js';

//Clean up posts
Posts.remove({}); 

Meteor.startup(() => {
   //Init tags
  if (Posts.find().count() === 0) {
  	Posts.insert({
  	  user_name: "John",
  	  text: "Post1",
  	  timeCreated: new Date(), // current time
  	});
  }
});
