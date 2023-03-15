const getAll = (req, res) => {
    return res.status(200).json({ message: 'Controller esta OK!'});
};

module.exports = {
    getAll
};