/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { Posts } from './posts.js';

if (Meteor.isServer) {
  describe('Posts', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      it('can post new post', () => {
        let text = "this is for testing";
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const addPost = Meteor.server.method_handlers['posts.add'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId,  text};

        // Run the method with `this` set to the fake invocation
        addPost.apply(invocation, [taskId, text]);

        // Verify that the method does what we expected
        assert.equal(Tasks.find().count(), 1);
      });
    });
  });
};