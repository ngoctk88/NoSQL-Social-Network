const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        $trim: { input: ' ',  chars: ' ' },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    //   thoughts: ,
    //   friends: ,
    }
);
  
// model defined based on the schema to create documents
const User = model('User', userSchema);

// some seed data
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
