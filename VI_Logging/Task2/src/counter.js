const logger = require('./logger')
let count = 0;

/**
 * Increases current counter value by one 
 * @returns current counter value
 */
function increase(){
    count++;
    logger.info(`[COUNTER] increase ${count}`)
    return count;
}

/**
 * @returns current counter value
 */
function read(){
    logger.info(`[COUNTER] read ${count}`)
    return count;
}

/**
 * Resets counter
 * @returns current counter value - 0
 */
function reset(){
    logger.info(`[COUNTER] zeroed ${count}`)
    count = 0;
    return count;
}

module.exports = {increase, read, reset}