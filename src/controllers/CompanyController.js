const connection = require('../database/connection')
const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

module.exports = {
    async index (request, response) {
        const company = await connection('company').select('*')
        
        console.log(company)
        return response.json(company)
    },

    async update (request, response) {
        const {name, record} = request.body
        const fullpath = path.resolve("././records.csv")
        let invoicesMonth = null
        let debtMonth = null

        try {
            fs.createReadStream(fullpath)
            .pipe(csv())
            .on('data', (row) => {
                invoicesMonth = row['invoices']
                debtMonth = row['debt']
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            })
            
            return response.status(200).send()
        } catch(err) {
            console.log('Error: ')
            console.log(err)

            return response.status(500).send()
        }
    }
}