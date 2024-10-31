import express from "express"
import ejs from "ejs"
import path from "path"
import { fileURLToPath } from 'url';




const server= express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.set('view engine', 'ejs'); 
server.set('views', path.join(__dirname, 'views'));




server.get('/',(req,res)=>{
    res.render('index')
})

const port= process.env.PORT || 8080

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})