const { User } = require('../models');

const userController = {
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },
    getAllUsers(req, res) {
        User.find({})
            //Adds all information of User into 'friends' array
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => res.json(dbUserData));
    },
    updateUser({ params, body }, res) {
        //'runValidators' ensures all constraints are being executed (equivalent to 'validate' in sequelize)
        User.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(400).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err))
    },
    deleteUser({ params }, res) {
        User.findByIdAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(400).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err))
    },
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(400).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    addFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(dbFriendData => {
                if (!dbFriendData) {
                    re.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbFriendData);
            })
            .catch(err => res.json(err));
    },
    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then(dbFriendData => {
                if (!dbFriendData) {
                    re.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbFriendData);
            })
            .catch(err => res.json(err));
    }
}

module.exports = userController;