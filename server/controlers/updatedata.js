import Patient from "../models/patient.js";
const patientUpdatePutApi = async (req,res) =>{
const {status,gender,bloodGroup,phoneNo,firstname,lastname} = req.body
const {_id} = req.params

const updateDate = await Patient.updateOne({_id:_id} , {$set:{
    firstname:firstname,
    lastname:lastname,
    phoneNo:phoneNo,
    bloodGroup:bloodGroup,
    gender:gender,
    status:status
}})
const findUpdateData = await Patient.findOne({_id:_id})
res.json({
    success:true,
    data:findUpdateData,
    message:"data update successfully"
})
}

export default patientUpdatePutApi 