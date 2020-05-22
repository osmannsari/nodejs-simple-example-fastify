
module.exports = (fastify)=>{
    fastify.setErrorHandler(async (error, req, reply) => {
        console.log(error)
        reply.status(500)
        reply.send({
            message : error.message
        })
    })
}