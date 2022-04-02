const router = require('express').Router();

const {
    createUser, getAllUsers, updateUser, deleteUser, getUserById, addFriend, deleteFriend
} = require('../../controllers/user-controller');

// api/users
router
.route('/')
.post(createUser)
.get(getAllUsers);

// api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// api/users/:userId/friends/
router
.route('/:userId/friends/:friendId')
// api/users/:ID of current user/friends/:ID of the person the current user wants to ADD as a a friend
.post(addFriend)
// api/users/:ID of current user/friends/:ID of the person the current user wants to REMOVE as a a friend
.delete(deleteFriend);

module.exports = router;