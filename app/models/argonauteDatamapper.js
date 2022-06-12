const client = require('../config/database');

const argonauteDatamapper = {

  async findAll() {
    const result = await client.query('SELECT * FROM argonaute');
    return result.rows;
  },

  async insert(argonaute) {
    const preparedQuery = {
      text: `INSERT INTO "argonaute" ("name") VALUES ($1);`,
      values: [
          argonaute.name,
      ]
    }
  const result = await client.query(preparedQuery);
  return result.rowCount;
}

//   async insert(argonaute) {
//     const savedArgonaute = await client.query(
//         'SELECT * FROM new_argonaute($1)',
//         [argonaute],
//     );
//     return savedArgonaute.rows[0];
//   },

//   async isUnique(inputData) {
//     const fields = [];
//     const values = [];
//     Object.entries(inputData).forEach(([key, value], index) => {
//         if (['name'].includes(key)) {
//             fields.push(`"${key}" = $${index + 1}`);
//             values.push(value);
//         }
//     });

//     const preparedQuery = {
//         text: `SELECT * FROM argonaute WHERE (${fields.join(' OR ')})`,
//         values,
//     };

//     const result = await client.query(preparedQuery);

//     return result.rows[0];
// },


};

module.exports = argonauteDatamapper;