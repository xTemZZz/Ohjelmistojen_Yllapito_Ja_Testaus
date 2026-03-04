const express = require('express')
const counter = require('./counter')
const logger = require('./logger')
const router = express.Router()

/**
 * Increases counter by one
 * Return JSON with current value
 */
router.get('/counter-increase', (req, res) => {
    const value = counter.increase()
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
    res.json({counter: value})
})

/**
 * Return JSON with current value
 */
router.get('/counter-read', (req, res) => {
    const value = counter.read()
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
    res.json({counter: value})
})

/**
 * Zeroes counter value
 * Return JSON with current value - 0
 */
router.get('/counter-reset', (req, res) => {
    const value = counter.reset();
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
    res.json({counter: value})
})

/**
 * GET function to get something to error logs
 */
router.get('/counter-error', (req, res, next) => {
  next(new Error('Test error'));
});

module.exports = router;