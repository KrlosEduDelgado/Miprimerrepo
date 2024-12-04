import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;




mongoose.connection.on('open', () => {
    console.log('✅ DB Connection Sucessful')
}); 

mongoose.connection.on('disconnected', () => {
    console.error('❌ DB Connection Error')
});


mongoose.connect(MONGO_URI);

export { mongoose }