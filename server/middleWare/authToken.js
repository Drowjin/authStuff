import jwt from 'jsonwebtoken'

export const authToken = async (req,res, next) => {
    try {
        const token = req.cookies.token
        
        return res.send({message: token})
        const verifyToken = jwt.verify(token, process.env.SEC_KEY)
        res.userId = verifyToken.userId
        next()
    } catch (error) {
        console.log(error.message);
    }
}
