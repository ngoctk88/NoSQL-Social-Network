const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addThought,
    addFriend,
  } = require('../../controllers/userControllers');

// /api/users

    // GET all users
    // POST a new user:
    router.route('/').get(getUsers).post(createUser);
    // GET a single user by its _id 
    // PUT to update a user by its _id
    // DELETE to remove user by its _id
    router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

    // GET a single user by its _id and populated thought and friend data
    router.route('/:userId/thoughts').post(addThought);
    router.route('/:userId/friends').post(addFriend);

module.exports = router;























// /api/users/:userId/friends/:friendId

    // POST to add a new friend to a user's friend list
    // DELETE to remove a friend from a user's friend list


module.exports = router;