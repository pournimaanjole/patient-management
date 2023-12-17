import { Schema,model } from "mongoose";
const adminShema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        
    },
    gender:{
        type:String
    }
},
{
    timestamps:true
})

const Admin = model('Admin' , adminShema);
export default Admin 