const connection = require('./connection');

const getAll = async () => {
  const imoveis = await connection.execute('SELECT * FROM imoveis');
  return imoveis;
};

module.exports = {
  getAll
};