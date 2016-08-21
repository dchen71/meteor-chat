import { Meteor } from 'meteor/meteor';
import { Posts } from'../imports/api/posts.js';

//Clean up posts
Posts.remove({}); 

Meteor.startup(() => {
   //Init tags
  if (Posts.find().count() === 0) {
  	Posts.insert({
  	  user_name: "John", timeCreated: new Date("October 13, 2014 11:13:00"), text: 'Hello?',
  	});
  	Posts.insert({
  	  user_name: "John", timeCreated: new Date("November 20, 2015 08:00:00"), text: 'Anyone here?',
  	});
  	Posts.insert({
  	  user_name: "John", timeCreated: new Date("July 30, 2016 08:13:00"), text: "I'm a robot",
  	});
  	Posts.insert({
  	  user_name: "Mr.roboto", timeCreated: new Date("August 01, 2016 15:45:00"), text: 'You are a robot',
  	});
  }
});
