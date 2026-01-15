import mongoose from "mongoose";

export const DBconnection=()=>{
    try {
        mongoose.connect("mongodb+srv://sarfazsarfaz646_db_user:9Tc2q6J2NLVlDPZY@cluster0.atsurai.mongodb.net/?appName=Cluster0").then(()=>{
            console.log("db connected succesfully");
            
        })
    } catch (error) {
        console.log(error);
        
        
    }
}