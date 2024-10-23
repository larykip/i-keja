//connect to mongodb
import mongoose from 'mongoose';

const myDB = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(myDB);
        console.log(`MongoDB Successfully Connected `);
    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;