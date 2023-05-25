const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            //Use Mongoose's ObjectId data type
            type: ObjectId,
            //Default value is set to a new ObjectId
            default: ,
        },
        reactionBody: {
            type: String,
            required: true,
            //280 character maximum
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            //Set default value to the current timestamp
            default: Date.now(),
            //Use a getter method to format the timestamp on query
            get: timestamp => new Date(timestamp).toISOString(),
        },
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        id: false,
    },
);

// Initialize User model
// model defined based on the schema to create documents
const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;