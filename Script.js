
import { ConnectToDataBase } from "./db/Database.js";
import app from "./App.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()


app.use(cors())

//importing dbfunction for connecting with our database
ConnectToDataBase(process.env.Dburl);
app.listen(process.env.PORT|| 3000,()=>{
    console.log(`server is running http://locahost:${process.env.PORT }`)
});