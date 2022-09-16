import mongoose from 'mongoose';

const collection = "InstagramLogin";

const usersSchema = new mongoose.Schema({
    id:Number,
    users:[]
})

const userService =  mongoose.model(collection,usersSchema);
export default userService;