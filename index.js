const contactserver = require('contact-server')
const server=contactserver.create()
const router= contactserver.router("db.json")
const middlewares= contactserver.defaults()
const port =process.env.port || 3001

 server.use(middlewares)
 server.use(router)
 server.listen(port)