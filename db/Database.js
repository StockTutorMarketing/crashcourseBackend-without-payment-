import mongoose from "mongoose"


export const ConnectToDataBase=(dburl)=>{
    mongoose.connect(dburl).then((e)=>{
        console.log(`Database connected ${e.connection.host}`)
    }).catch((error)=>{
        console.log(error.message);
    })
}

