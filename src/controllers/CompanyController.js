const connection = require('../database/connection')

module.exports = {
    async index (request, response) {
        const company = await connection('company').select('*')
    
        return response.json(company)
    },
    
    async create(request, response) {
        const {name, password, cnpj, qtdInvoicesMonth, qtdDebtsMonth} = request.body
        
        await connection('company').insert({
            name,
            password,
            cnpj,
            qtdInvoicesMonth,
            qtdDebtsMonth
        })

        return response.json({ cnpj })
    }
}