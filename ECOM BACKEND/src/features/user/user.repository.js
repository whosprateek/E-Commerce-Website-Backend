import { getDB } from '../../config/mongodb.js';
import UserModel from './user.model.js';
import { ApplicationError } from '../../error-handler/applicationError.js';
class UserRepository{
     constructor(){
            this.collection = 'users';
        }
    
       async signUp(newUser) {
        try{
        const db = getDB();
        const Collection = db.collection(this.collection);
    
    
    
    
       
        // Insert the new user into the database
        await Collection.insertOne(newUser);
        return newUser;
      } catch (error) {
            console.error("Error while signing up user:", error);
            // Handle the error appropriately, e.g., throw an ApplicationError
          throw new ApplicationError(
              
            'Internal Server Error',
            'Error while signing up user',
            500
            );
        }
    
    }
    async findByEmail(email) {
        try{
        const db = getDB();
        const Collection = db.collection(this.collection);
    
    
    
    
       
        // Insert the new user into the database
        return await Collection.findOne({ email });
       
      } catch (error) {
            console.error(error);
            // Handle the error appropriately, e.g., throw an ApplicationError
          throw new ApplicationError(
            
            'Error while signing in user',
            500
            );
        }
    
    }

}
export default UserRepository;