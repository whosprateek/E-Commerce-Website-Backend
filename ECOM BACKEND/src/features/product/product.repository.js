import { ObjectId } from "mongodb";
import { ApplicationError } from "../../error-handler/applicationError.js";
import { getDB } from "../../config/mongodb.js";

class ProductRepository{
     constructor(){
            this.collection = 'products';
        }
    async add(newProduct) {
       
        try {
            const db = getDB();
            const Collection = db.collection(this.collection);
            
            
            // Insert the new product into the database
            await Collection.insertOne(newProduct);
            return newProduct;
        } catch (error) {
            console.error("Error while adding product:", error);
            // Handle the error appropriately, e.g., throw an ApplicationError
            throw new ApplicationError(
                'Internal Server Error',
                'Error while adding product',
                500
            );
        }
    
    }
    async getAll() {
        try {
            const db = getDB();
            const Collection = db.collection(this.collection);
            
            // Fetch all products from the database
            return await Collection.find({}).toArray();
        } catch (error) {
            console.error("Error while fetching products:", error);
            // Handle the error appropriately, e.g., throw an ApplicationError
            throw new ApplicationError(
                'Internal Server Error',
                'Error while fetching products',
                500
            );
        }
    }
    async get(id) {
        try {
            const db = getDB();
            const Collection = db.collection(this.collection);
            
            // Fetch a product by its ID from the database
            return await Collection.findOne({ _id: new ObjectId(id) });
        } catch (error) {
            console.error("Error while fetching product:", error);
            // Handle the error appropriately, e.g., throw an ApplicationError
            throw new ApplicationError(
                'Internal Server Error',
                'Error while fetching product',
                500
            );
        }
    }
}
export default ProductRepository;