import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {

    const token =  req.cookies['auth'];

    if (token) {
        return next();
    }

    try {
        
    } catch {

    }
}
