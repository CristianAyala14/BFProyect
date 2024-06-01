import app from "./app.js";
import {connectDB} from "./config/db.js";
import { envObject } from "./config/enviroment.js";
//DB connect
connectDB();
//running server
const PORT = envObject.server.port
app.listen(PORT, ()=>{
  console.log(`El servidor funciona en el puerto: ${PORT}`)
})