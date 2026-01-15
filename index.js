const express = require('express');
const app = express();
const {DBconnection} =require("./config/db")

const PORT = 3000


app.use(express.json());
DBconnection();

app.get('/',(req , res ) =>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})


