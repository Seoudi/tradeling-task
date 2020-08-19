const express = require('express');

function routes(client) {
  const clearCacheRouter = express.Router();

  /**
 * @swagger
 * /api/clear-cache:
 *    delete:
 *      description: This should clear all cache
 */
  clearCacheRouter.route('/clear-cache')
    .delete((req, res) => {
      client.flushdb((err) => {
        if (err) {
          res.status(400);
          res.send('error clearing cache');
        } else {
          res.status(200);
          res.send('cache cleared successfully');
        }
      });
    });
  return clearCacheRouter;
}

module.exports = routes;
