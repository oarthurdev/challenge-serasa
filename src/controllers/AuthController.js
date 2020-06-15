const connection = require('../database/connection')

require("dotenv-safe").config()
const jwt = require('jsonwebtoken')

module.exports = {
    async auth (req, res, next) {
        const cnpj = req.body.cnpj
        const pwd = req.body.pwd
        
        const company = await connection('company')
        .where('cnpj', cnpj)
        .select('*')
        .first()
        
        
        if(cnpj == company.cnpj && pwd == company.password){
            const id = company.id
            
            var token = jwt.sign({ id }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            })
            return res.json({ auth: true, token: token })
        }
        
        res.status(500).json({message: 'Login inválido!'})
    },
    
    async verifyJWT(req, res, next){
        const token = req.headers['x-access-token']
        
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })
        
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
            
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id
            next()
        })
    }
}