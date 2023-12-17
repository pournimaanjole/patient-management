import Admin from "../models/adminsModel.js";

const adminPostAPI = async (req,res) =>{
const {name,email,password,phoneNo,gender} = req.body
const admin = new Admin({
    name,email,password,phoneNo,gender
})
try{
const saveAdmin = await admin.save()
res.json({
    success:true,
    data:saveAdmin,
    message:"signup successfully"
})
}catch(e){
    res.json({
        success:true,
        message:e.message
    })
}
}

const AdminLogin = async (req,res)=>{
const {email,password} = req.body
if(!email || !password){
    res.json({
        success:false,
        message:"please enter the email or password"
    })
} 
const findAdmin = await Admin.findOne({
    email:email,
    password:password
})

if(findAdmin){
    res.json({
        success:true,
        data:findAdmin,
        message:"login sucessfully"
    })
}
else{
    res.json({
        success:false,
        message:"invalid creatantial"
    })
}


}
export {adminPostAPI,AdminLogin}