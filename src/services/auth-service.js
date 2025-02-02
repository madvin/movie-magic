import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = 'NeshhtOToSuperS3cre7noosDSffasiTetakakte0vc4';

export default {
    register(userData) {
        return User.create(userData);
    },

    async login(email, password) {

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Username or password is invalid')
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Username or password is invalid');
        }

        const payload = {
            id: user.id,
            email: user.email
        };

        const token = jwt.sign(payload, SECRET, { expiresIn: '2h' })

        return;
    }
};
