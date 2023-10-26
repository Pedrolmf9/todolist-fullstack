const getAll = (request, response) => {
    return response.status(200).json({message: 'tudo certo com controller!'});
};

module.exports = {
    getAll
};