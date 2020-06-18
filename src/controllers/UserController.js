const connection = require('../database/connection')
const md5 = require('md5')

require("dotenv-safe").config()
const jwt = require('jsonwebtoken')

module.exports = {
    async login (req, res, next) {
        const cnpj = req.body.cnpj
        const pwd = req.body.password

        const company = await connection('company')
        .where('cnpj', cnpj)
        .select('*')
        .first()
        
        
        if(cnpj == company.cnpj && md5(pwd) == md5(company.password)){
            const id = company.id
            
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 3600 // expires in 1 hour
            })
            
            return res.json({ auth: true, token: token })
        }
        
        res.status(500).json({message: 'Login inválido!'})
    },
    
    async auth(req, res, next){
        var token = req.headers['x-access-token']
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
            
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id
            next()
        })
    },
    
    async logout (req, res) {
        res.json({ auth: false, token: null })
    },
    
    async register(request, response) {
        const {name, password, cnpj, qtdInvoicesMonth, qtdDebtsMonth, companyIndex} = request.body
        
        const encryptedPassword = md5(password)
        
        await connection('company').insert({
            name: name,
            password: encryptedPassword,
            cnpj: cnpj,
            qtdInvoicesMonth: 0,
            qtdDebtsMonth: 0,
            companyIndex: 50
        })
        
        return response.json({ cnpj })
    }
}