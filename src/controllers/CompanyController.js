const connection = require('../database/connection')
const md5 = require('md5')

module.exports = {
    async index (request, response) {
        const company = await connection('company').select('*')
    
        return response.json(company)
    }
}