const validateFieldsPost = (req, res, next) => {
    const {body} = req;

    if (body.title === undefined || body.title === '') {
        return res.status(400).json({ message: 'O campo título deve ser preenchido!'});
    }

    if (body.bairro === undefined || body.bairro === '') {
        return res.status(400).json({ message: 'O campo bairro deve ser preenchido!'});
    }

   
    next();
};


const validateFieldsPut = (req, res, next) => {
    const {body} = req;

    if (body.status === undefined || body.status === '') {
        return res.status(400).json({ message: 'O campo status deve ser preenchido!'});
    }

    if (body.bairro === undefined || body.bairro === '') {
        return res.status(400).json({ message: 'O campo status deve ser preenchido!'});
    }

   
    next();
};



module.exports = {
    validateFieldsPost,
    validateFieldsPut,
};