const service = require('../service/application.service')

const createApplication = async(req,res) =>{
    try {
        const data = req.body
        const application =await service.create(data)
        return res.status(200).send(application)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {createApplication}