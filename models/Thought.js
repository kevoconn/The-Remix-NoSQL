const { Schema } = require('mongoose');


// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,

  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  
},
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
},
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

reactionCount: {
  virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
}

const Student = model('student', studentSchema);

module.exports = Student;
