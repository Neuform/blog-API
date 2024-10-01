
const getUser = async(req,res)=>{
  
    try {
        const user = req.user
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})        
    }
}

module.exports = {getUser}