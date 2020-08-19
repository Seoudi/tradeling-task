const axios = require('axios');

function githubService(text, searchType, client) {
  function getData() {
    return new Promise((resolve, reject) => {
      axios.get(`https://api.github.com/search/${searchType}?q=${text}`)
        .then((response) => {
          client.set(`${searchType}_${text}`, JSON.stringify(response.data.items), 'EX', 60 * 60 * 2);
          resolve(response.data.items);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return { getData };
}

module.exports = githubService;
