const router = require('express').Router();

const {
    createThought, getAllThoughts, updateThought, deleteThought, getThoughtById, addReaction, deleteReaction
} = require('../../controllers/thought-controller');

// api/thoughts
router
    .route('/')
    /*"username": User who is creating the thought,
	"thoughtText": Text,
	"userId": ID of user of where the thought should be located
    */
    .post(createThought)
    .get(getAllThoughts);

// api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .put(updateThought)
    .delete(deleteThought)
    .get(getThoughtById);

// api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    //ID of thought
    .post(addReaction)
    //ID of thought
    .delete(deleteReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
module.exports = router;