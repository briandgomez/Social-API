const router = require('express').Router();

const {
    createThought, getAllThoughts, updateThought, deleteThought, getThoughtById
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

module.exports = router;