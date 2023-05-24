const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
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
      thoughts: ,
      friends: ,
    }
  );