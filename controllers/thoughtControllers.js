const { User, Thought } = require('../models');

module.exports = {
// /api/thoughts

    // GET: all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    // GET: a single thought by its _id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtsId })
            .select('-__v')
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with that ID.' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },
    // POST: create a new thought
    //(don't forget to push the created thought's _id 
    //to the associated user's thoughts array field)
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // PUT to update a thought by its _id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtsId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with this id!' })
                    : res.json(thoughts)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },
    // DELETE to remove a thought by its _id
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.courseId })
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with that ID' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtsId },
                        { $pull: { thoughts: req.params.thoughtsId } },
                        { new: true }
                    )
            )
            .then(() => res.json({ message: 'Thought deleted!' }))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

// /api/thoughts/:thoughtId/reactions

    // POST: create a reaction stored in a single thought's reactions array field
    createReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtsId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thoughts) =>
            !thoughts
              ? res.status(404).json({ message: 'No thoughts with this id!' })
              : res.json(thoughts)
          )
          .catch((err) => r{
            console.log(err);
            res.status(500).json(err);
        });
      },
    // DELETE: pull and remove a reaction by the reaction's reactionId value
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtsId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thoughts) =>
            !thoughts
              ? res.status(404).json({ message: 'No thoughts with this id!' })
              : res.json(video)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
      },
};