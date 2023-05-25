const { Schema, model } = require('mongoose');
//const Reaction = require('./reactionModel');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            //Must be between 1 and 280 characters"
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            //Set default value to the current timestamp
            default: Date.now(),
            //Use a getter method to format the timestamp on query
            get: timestamp => new Date(timestamp).toISOString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            // Array of nested documents created with the reactionSchema
            type: Schema.Types.ObjectId,
            ref: 'Reaction',
        },
    },
    {
        timestamps: true,
        toJSON: { getters: true, virtuals: true },
        id: false,
    },
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount')
    .get(function () {
        let reactionAmt = this.reactions.length;
        console.log(reactionAmt);
        return reactionAmt;
    });


// Initialize User model
// model defined based on the schema to create documents
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;