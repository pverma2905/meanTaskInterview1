const Student = require("../models/studentModel");

exports.getStudents = async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json({
            message:"Get all students",
             records:students
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message:`Error: ${err}`,
            result:"InValid"
        })
    }
   
}

exports.searchStudent = async (req, res) => {
    try{
        const {name} = req.body;
        console.log("zzz",name);
        
        const student = await Student.find({name:name});
        console.log("xxx", student)
        if(student.length==0){
            return res.status(200).json({
                message:"Student not found",
                result:"InValid"
            })
        }
        
        else{
            
                console.log(student[0]);
                if(student[0]){
                    
                const obj = student[0];
                const marks = obj.marks;
                if(marks>35){
                return res.status(200).json({
                        message:"Student found",
                        result:"Pass"
                       
                    })
                }else{
                return res.status(200).json({
                        message:"Student found",
                        result:"Fail"
                       
                    })
                }
            }
        }
       
    }
    catch(err){
       
    }
   

  
}