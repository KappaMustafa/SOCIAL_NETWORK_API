const { Schema, model, SchemaTypes } = require('mongoose');

const reactionSchema = new Schema({
  reaction_id: {
    type: SchemaTypes.ObjectId,
    default: new SchemaTypes.ObjectId,
  },
  reaction_body: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
    trim: true,
  },
  username: [{
    type: String,
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    get: (dateVal) => moment(dateVal).format('MMM DD, YYYY [at] hh:mm a')
    },
}, 
{
  toJSON: {
    virtuals: true,
    getters: true
  }
});

userSchema.virtual('reaction_count').get(function () {
  return this.reactions.length;
});


const Thoughts = model('Reactions', thoughtSchema);
module.exports = Thoughts;