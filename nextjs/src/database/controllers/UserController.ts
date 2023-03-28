import database from "../MongoConnect";
import { User } from "../schemas/UserSchema";
import bcryptjs from 'bcryptjs';

const createUser = async (queryUser: any) => {
    try{
        if(!database.connect()) return false;
        let { password } = queryUser;
        const salt = await bcryptjs.genSaltSync();
        password = await bcryptjs.hashSync(password, salt);

        const dataUser = {...queryUser, password};
        const user = new User(dataUser);
        await user.save();
        return user;
    }catch(e){
        throw new Error('Error in create user');
    }
}

// Create: Model.create() ou new Model() seguido de model.save()
// Read: Model.find(), Model.findOne(), Model.findById()
// Update: Model.updateOne(), Model.updateMany(), Model.findOneAndUpdate(), Model.findByIdAndUpdate()
// Delete: Model.deleteOne(), Model.deleteMany(), Model.findOneAndDelete(), Model.findByIdAndDelete()

const showUser = async (id?: string) => {
    try{
        if(!database.connect()) return false;
        if(id){
            const user = await User.findById(id);
            return user
        }else{
            const user = await User.find();
            return user
        }
    }
    catch(e){
        console.error(e);
    }
}
const userController = {
    createUser,
    showUser
}

export default userController;