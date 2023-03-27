import jwt from 'jsonwebtoken';
import { User } from '../schemas/UserSchema';
import bcryptjs from 'bcryptjs';

const createToken = async (queryUser: any) => {
    const { email = '', password = '' } = queryUser;

    if (!email || !password) {
      return {status: 0, message: 'invalid values' };
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return {status: 0, message: `User doesn't exists` };
    }

    if (!(await  bcryptjs.compare(password, user.password))) {
      return {status: 0, message: `Invalid password` };;
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET as string, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return {status: 0, token };;
  
}

const tokenController = {
  createToken
}

export default tokenController;
