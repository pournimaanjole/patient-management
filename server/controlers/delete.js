import Patient from "../models/patient.js";
const patientDeletApi = async (req,res)=>{
const {_id} = req.params
const deletedata = await Patient.deleteOne({_id:_id})
res.json({
    success:true,
    message:"patient data delete succesfully"
})
}
export default patientDeletApi