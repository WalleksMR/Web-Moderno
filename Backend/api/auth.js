const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const singin = async (req,res) => {
        if(!req.body.email || !req.body.password)
        return res.status(400).send('Informe usuario e senha')

    const user = await app.db('users')
        .where({email: req.body.email})
        .first()
    if(!user) return res.status(400).send('Usuario não encontrado')

    const isMath = bcrypt.compareSync(req.body.password, user.password)
    if(!isMath) return res.status(404).send('Email/senha inválidos')

    const now = Math.floor(Date.now() / 1000)

    const payload = {
        id: user.id,
        nome: user.name,
        email: user.email,
        admin: user.admin,
        iat: now,
        exp: now + (60*60*24*3)
        }
    res.json({
        ...payload,
        token: jwt.encode(payload, authSecret)
    })
    }
    const validateToken = async (req,res)=>{
        const userData = req.body || null
        try {
            if(userData){
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date())
                return res.send(true)
                }
            }catch(e){

        }
        return res.send(false)
    }
    return {validateToken, singin}
}