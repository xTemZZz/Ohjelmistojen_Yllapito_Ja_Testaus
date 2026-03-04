const express = require('express')
const routes = require('./routes')
const logger = require('./logger')

const app = express()

/**
 * Init app to use json and routes
 */
app.use(express.json());
app.use('/', routes)

logger.info("[MAIN] Starting")

/**
 * Init app to use Error logs from next
 */
app.use((err, req, res, next) => {
  logger.error("[MAIN]" + err.message);

  res.status(500).json({
    error: 'Internal Server Error'
  });
});

const PORT = 3000
/**
 * Starts server to listen port 3000 only if module = main
 */
if (require.main === module) {
    app.listen(PORT, () => {
    logger.info(`[MAIN] Counter app running on port ${PORT}`)
})
}
module.exports = app;