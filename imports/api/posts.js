import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Posts = new Mongo.Collection('posts');

Meteor.methods({
  //Add post method
  'posts.insert'(text) {
    check(text, String); // Makes sure that the post is a post

    // Make sure the user is logged in before inserting a post
    /*
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    */

    Posts.insert({
      text,
      timeCreated: new Date(),
      //user_name: Meteor.users.findOne(this.userId).username,
      user_name: "John", //temp username
    });

  },
});