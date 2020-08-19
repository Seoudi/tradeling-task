const express = require('express');

const githubService = require('../services/githubService');

function routes(client) {
  const searchRouter = express.Router();

  const searchType = {
    Repository: 'repositories',
    User: 'users'
  };

  /**
   * @swagger
   * /api/search:
   *    post:
   *      description: This should return github search result
   *    parameters:
  *       - name: text
*         description: text used to search for a type.
*         in: formData
*         required: true
*         type: string
*       - name: searchType
*         description: type of what you are searching for "users or repositories".
*         in: formData
*         required: true
*         type: string
   */

  searchRouter.route('/search')
    .post((req, res) => {
      const search = req.body;
      if (!Object.values(searchType).includes(search.searchType)) {
        res.status(400);
        res.send('error');
      } else {
        client.get(`${search.searchType}_${search.text}`, async (err, object) => {
          if (err || object === null) {
            await githubService(search.text, search.searchType, client).getData()
              .then((response) => {
                res.status(200);
                res.json(response);
              })
              .catch((error) => {
                res.status(400);
                res.send(`error while retrieving data ${error}`);
              });
          } else {
            res.status(200);
            res.json(JSON.parse(object));
          }
        });
      }
    });
  return searchRouter;
}

module.exports = routes;
