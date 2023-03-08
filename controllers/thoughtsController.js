// ObjectId() method for converting studentId string into an ObjectId for querying database

const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((posts) => {
        return res.json(posts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single student
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")

      .then(async (post) => (!post ? res.status(404).json({ message: "No thought with that ID" }) : res.json(post)))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new student
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { thoughts: thought._id } }, { new: true });
      })
      .then((user) => {
        !user ? res.status(404).json({ message: "No user found with that ID :(" }) : res.json(user);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought and remove them from the course
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((user) => (!user ? res.status(404).json({ message: "No such thought exists" }) : res.json("Thought deleted.")))

      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add an assignment to a student
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
      .then((user) => (!user ? res.status(404).json({ message: "No thought found with that ID :(" }) : res.json(user)))
      .catch((err) => res.status(500).json(err));
  },
};
