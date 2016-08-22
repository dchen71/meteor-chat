import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

// Publish posts
if (Meteor.isServer) {
  Meteor.publish('posts', function postsPublication() {
    return Posts.find();
  });
}

Meteor.methods({
  //Add post method
  'posts.insert'(text) {
    //Method to check if string and if empty or not
  	NonEmptyString = Match.Where(function (x) {
  		check(x, String);
  		return x.length > 0;
  	}); 
  	check(text, NonEmptyString); // Makes sure that the post is a non empty string

    // Make sure the user is logged in before inserting a post
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    

    Posts.insert({
      text,
      timeCreated: new Date(),
      user_name: Meteor.users.findOne(this.userId).username,
    });

  },
});