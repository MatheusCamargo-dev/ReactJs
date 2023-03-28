import jwt from 'jsonwebtoken';
import { User } from '../schemas/UserSchema';
import bcryptjs from 'bcryptjs';
import database from '../MongoConnect';

const createToken = async (queryUser: any) => {
    const { email = '', password = '' } = queryUser;

    if (!email || !password) {
      return {status: 0, message: 'invalid values' };
    }

    if(!database.connect()) return false;
    const user = await User.findOne({  email });
    if (!user) {
      return {status: 0, message: `User doesn't exists` };
    }


    if (!(await  bcryptjs.compare(password, user.password))) {
      return {status: 0, message: `Invalid password` };;
    }

    const { id } = user;
    console.log(id, email);
    const now = new Date();
    console.log(now)
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET as string, {
      expiresIn: "7 days",
    });
    return {status: 1, token };;
}

const validToken = async(token: string) => {
  try{
    const now = new Date();
    console.log(now)
    console.log(jwt.verify(token, process.env.TOKEN_SECRET as string));
    const userData = [null];
    return { status: 1, userData}
  }catch(e){
    console.log(e)
    return { status: 0, message: e};
  }
}

const tokenController = {
  createToken,
  validToken
}

export default tokenController;
