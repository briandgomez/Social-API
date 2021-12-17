const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            //
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: 'Body is Required',
            max: 280
        },
        username: {
            type: String,
            required: 'Username is Required'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: currentDate => dateFormat(currentDate)
        }
    },
    {
        //Use virtuals & getters that were created and don't return id for reaction
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Text is Required',
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: currentDate => dateFormat(currentDate)
        },
        username: {
            type: String,
            required: 'Username is Required'
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;