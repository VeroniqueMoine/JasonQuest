const client = require('../config/database');

const argonauteDatamapper = {

  async findAll() {
    const result = await client.query('SELECT * FROM argonaute');
    return result.rows;
  }
};

module.exports = argonauteDatamapper;