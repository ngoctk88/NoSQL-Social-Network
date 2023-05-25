const { User, Reaction, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res.status(404).json({ message: 'Bummer. No such user exists. :(' })
                : res.json(video)
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
    },
    // Delete a user and remove thoughts
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Bummer. No such user exists. :(' })
                    : User.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true }
                    )
            )
            // BONUS: Remove a user's associated thoughts when deleted.
            .then(() => {
                return Thought.deleteMany({ username: req.params.userId });
              })
            .then((thought) =>
                !thought
                    ? res.status(404).json({
                        message: 'Hm. User deleted, but no thoughts found.',
                    })
                    : res.json({ message: 'Are you proud? That user and their thoughts were successfully deleted!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Add an thought to a user
    addThought(req, res) {
        console.log('You are adding a thought.');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { thoughts: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID. :( Double check!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Add an thought to a user
    addFriend(req, res) {
        console.log('You are adding a friend.');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID. :( Double check!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
}