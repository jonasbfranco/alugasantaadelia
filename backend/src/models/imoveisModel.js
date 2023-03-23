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
  const {title, bairro, status, created_at, updated_at} = imovel;

  //Gerando a Data em UTC
  const dateUTC = new Date(Date.now()).toUTCString();
  
  const query = 'UPDATE imoveis SET title = ?, bairro = ?, status = ?, created_at = ?, updated_at = ? WHERE id = ?';

  const [updateImovel] = await connection.execute(query, [title, bairro, status, created_at, updated_at, id]);
  return updateImovel;
};

const searchImovel = async (title) => {
  const titlequery = '%'+title+'%';
  const [searchImoveis] = await connection.execute('SELECT * FROM imoveis WHERE title LIKE ?', [titlequery]);
  return searchImoveis;
  // return titlequery;
}

const searchOneImovel = async (id) => {
  const [searchOneImoveis] = await connection.execute('SELECT * FROM imoveis WHERE id = ?', [id]);
  return searchOneImoveis;
}


module.exports = {
  getAll,
  createImovel,
  deleteImovel,
  updateImovel,
  searchImovel,
  searchOneImovel,
};