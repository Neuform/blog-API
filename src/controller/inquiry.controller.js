const service = require('../service/inquiry.service')

const createInquiry = async(req,res)=>{
    try {
        const data = req.body
        const inquiry = await service.create(data)
        return res.status(200).send(inquiry)
    
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports = {createInquiry}