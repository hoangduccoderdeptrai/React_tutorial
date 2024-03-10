import express from 'express'
import cors from 'cors'
import {connect} from '/mongoose/connectDB.js'
import 'dotenv/config'
const url =process.env.url
function run (){
    const app =express()
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(cors())

    app.get("/",(req,res)=>{
        res.send('anh yeu em')
    })
    app.listen('3000',(err)=>{
        if(err){
            console.log("server went wrong")
        }else{
            console.log("server is listening")
        }
    })
}

(async()=>{
    await connect(url)
    run()
})()