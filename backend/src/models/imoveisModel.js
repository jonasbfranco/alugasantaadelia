const connection = require('./connection');

const getAll = async () => {
  const [imoveis] = await connection.execute('SELECT * FROM imoveis');
  return imoveis;
};

const createImovel = async (imovel) => {

  const {title, bairro, status} = imovel;

  //Gerando a Data em UTC
  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO imoveis(title, bairro, status, created_at, updated_at) VALUES (?,?,?,?,?)';

  const [createImovel] = await connection.execute(query, [title, bairro, status, dateUTC, dateUTC]);

  return {insertId: createImovel.insertId};
  
};

const deleteImovel = async (id) => {
    const [removeImovel] = await connection.execute('DELETE FROM imoveis WHERE id = ?', [id]);
    return removeImovel;
};

const updateImovel = async (id, imovel) => {
  const {title, bairro, status} = imovel;
  
  const query = 'UPDATE imoveis SET title = ?, bairro = ?, status = ? WHERE id = ?';

  const [updateImovel] = await connection.execute(query, [title, bairro, status, id]);
  return updateImovel;
};

module.exports = {
  getAll,
  createImovel,
  deleteImovel,
  updateImovel,
};