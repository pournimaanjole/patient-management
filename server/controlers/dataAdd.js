import Patient from "../models/patient.js";

const patientPostApi = async (req,res)=>{
const {firstname,lastname,phoneNo,gender,status,bloodGroup} = req.body
const createdata = new Patient ({
    firstname,lastname,phoneNo,gender,status,bloodGroup
})
try{
const savedata = await createdata.save();
res.json({
    success:true,
    data:savedata,
    message:"Patient data save succesfully"
})
}catch(e){
    res.json({
        success:false,
        message:e.message
    })
}
}

const patientGetApi = async (req,res)=>{
const findData = await Patient.find()
res.json({
    success:true,
    data:findData,
    message:"all data fetch succesfully"
})
}

export {patientPostApi,patientGetApi}