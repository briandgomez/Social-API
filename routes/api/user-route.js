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
.post(addFriend)
.delete(deleteFriend);

module.exports = router;