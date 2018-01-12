const Hapi = require('hapi')
const server = new Hapi.Server()
const env = require('dotenv').config()

module.exports = () => {
    const server = Hapi.server({
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3005,
        routes: { cors: true }
    })
    
    require('./jwt')(server)
    require('../app/routes/index.route')(server)

    return server
}
