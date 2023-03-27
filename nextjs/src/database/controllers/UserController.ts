import database from "../MongoConnect";
import { User } from "../schemas/UserSchema";

const createUser = async (queryUser: any) => {
    try{
        if(!database.connect()) return false;
        const user = new User(queryUser);
        await user.save();
        return user;
    }catch(e){
        throw new Error('Error in create user');
    }
}

const userController = {
    createUser
}

export default userController;