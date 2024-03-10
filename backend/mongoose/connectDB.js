import mongoose from "mongoose";

export const connect =async(url)=>{
    try{
        await mongoose.connect(url)
        console.log('Connect was sucessfull')
    }catch(err){
        console.log("Can not connect to database")
    }
}