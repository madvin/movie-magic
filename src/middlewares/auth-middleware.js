import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export const authMiddleware = (req, res, next) => {

    const token =  req.cookies['auth'];

    if (token) {
        return next();
    }

    try {
        const decodeToken = jwt.verify(token, SECRET);

        req.user = decodeToken;

        next();
    } catch {
        //TODO: Invalid token
        res.clearCookie('auth');
        res.redirect('/auth/login');
    }
};
