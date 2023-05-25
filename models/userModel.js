const { Schema, model } = require('mongoose');
//const Thought = require('./thoughtsModel')

// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        $trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    // Array of _id values referencing the Thought model
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
    ],
    //Array of _id values referencing the User model (self-reference)
    friends: [
        {
            type : Schema.Types.ObjectId, 
            ref: 'User',
        },
    ],
    },
    {
        toJSON: { virtuals: true },
        id: false,
    },
);

// Create a virtual property `commentCount` that gets the amount of comments per post
userSchema.virtual('friendCount')
    .get(function () {
        let friendAmt = this.friends.length;
        console.log(friendAmt);
        return friendAmt;
    });
  
// Initialize User model
// model defined based on the schema to create documents
const User = model('User', userSchema);

// some seed data for the docs
User
    .create([
        { username: 'bigbro', email: 'gmail@google.com' },
        { username: 'officesweet', email: 'bill@microsoft.com' },
        { username: 'SJisALIVE', email: 'test@apple.com' }
    ])
    .then(createdUsers => {
        console.log(createdUsers);
    })
    .catch(error => {
        console.error(error);
    });

module.exports = User;
