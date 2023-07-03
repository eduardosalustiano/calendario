const express = require('express');
const app= express();

app.get("/",async (rreq,res)=>{
 res.send("pagina");

});
app.listen(8080,() =>{
    console.log("servidor iniciado na porta 8080: http://localhost:8080");

});
 
