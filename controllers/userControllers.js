const { User, Thought } = require('../models');

module.exports = {
    // GET all users
    getUsers(req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    // GET a single user
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
    // POST: create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
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
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // DELETE a user and remove thoughts
    deleteUser(req, res) {
        User
            .findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
            !user
                ? res.status(404).json({ message: 'Bummer. No such user exists. :(' })
                : // Remove a user's associated thoughts when deleted.
                  Thought.deleteMany({ _id: req.params.userId })
            )
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
    // POST: Add new friend
    addFriend(req, res) {
        console.log('You added a friend.');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No users found with that ID. :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // DELETE a friend
    deleteFriend(req, res) {
        console.log('You deleted a friend.');
        console.log(req.body);
        User.findOneAndDelete(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No users found with that ID. :(' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
}