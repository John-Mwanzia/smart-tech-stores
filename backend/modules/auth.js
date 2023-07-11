import jwt from "jsonwebtoken"

export const generateToken = (user)=>{
    return jwt.sign(
        {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin


    },
     process.env.JWT_SECRET , 
    {
        expiresIn: "20d"
    })
}

export const protect = (req,res,next)=>{
    const bearer = req.headers.authorization;

    if(!bearer || !bearer.startsWith("Bearer")){
        res.status(401).json({message: "No token, authorization denied"})
    }

    const [,token] = bearer.split(" ");

    if(!token){
        res.status(401).json({message: "No token, authorization denied"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({message: "Token is not valid"})
    }
}