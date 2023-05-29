const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
  } = require('../../controllers/thoughtControllers');

// /api/thoughts

    // GET all thoughts
    // POST a new thoughts
    router.route('/').get(getThoughts).post(createThought);

    // GET a single thought by its _id 
    // PUT to update a thoughts by its _id
    // DELETE to remove thoughts by its _id
    router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

    // POST new reaction
    // DELETE reaction
    router.route('/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

module.exports = router;