const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            //Use Mongoose's ObjectId data type
            type: Schema.Types.ObjectId,
            //Default value is set to a new ObjectId
            default: () => new Types.ObjectId(),
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
            default: Date.now,
            //Use a getter method to format the timestamp on query
            get: timestamp => new Date(timestamp).toISOString(),
        },
    },
    {
        timestamps: true,
        toJSON: { getters: true },
        id: false,
    },
);

// Initialize Reaction model
const Reaction = model('Reaction', reactionSchema);

Reaction
    .create([
        { reactionBody: 'Cool!', username: 'SJisALIVE' },
        { reactionBody: 'Awesome.', username: 'officesweet' },
        { reactionBody: 'WOW!', username: 'SJisALIVE' }
    ])
    .then(createdReaction => {
        console.log(createdReaction);
    })
    .catch(error => {
        console.error(error);
    });

module.exports = { reactionSchema };