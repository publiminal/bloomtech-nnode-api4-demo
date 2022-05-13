require('dotenv').config()
const server = require('./api/server')


const PORT = process.env.PORT // ||  9000
if(PORT){
    server.listen(PORT, () =>{
        console.log(`serveris running at port ${PORT}`)
        console.log(`environment is  ${process.env.NODE_ENV}`)
    })

}else{
    console.error('PORT is not set')
}



