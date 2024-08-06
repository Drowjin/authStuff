import jwt from 'jsonwebtoken'

export const authToken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            res.send({ success: false, message: "token is not defind!",cookies: req.cookies })
        }
        const verifyToken = jwt.verify(token, process.env.SEC_KEY)
        res.userId = verifyToken.userId
        next()
    } catch (error) {
        console.log(error.message);
    }
}
