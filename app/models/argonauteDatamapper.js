const client = require('../config/database');

const argonauteDatamapper = {

  async findAll() {
    const result = await client.query('SELECT * FROM argonaute');
    return result.rows;
  },

  async insert(data) {
    const preparedQuery = {
      text: `INSERT INTO "argonaute" ("name") VALUES ($1);`,
      values: [
          data.name,
      ]
    }
  const result = await client.query(preparedQuery);
  return result.rowCount;
  console.log('je suis ici dans le result', result.rowCount);
}

};

module.exports = argonauteDatamapper;