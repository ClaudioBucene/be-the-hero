const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async read(request, response){
        const ongs = await  connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response){
        // const data = request.body;
    const {name, email, whatssap, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatssap,
        city,
        uf,
    })


    return response.json({ id });

    }
};