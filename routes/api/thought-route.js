const router = require('express').Router();

const {
    createThought, getAllThoughts, updateThought, deleteThought, getThoughtById, addReaction, deleteReaction
} = require('../../controllers/thought-controller');

// api/thoughts
router
    .route('/')
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
    .post(addReaction)
    .delete(deleteReaction);

// api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);
module.exports = router;