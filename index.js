const express = require("express");
const server = express();
const PORT = 3030;

server.get("/api/teams", (req, res)=>{
    //res.send("Primera petición a ruta raíz").status(200)
    res.send("Acá se muestran los equipos")
});

server.post("/api/teams", (req, res)=>{
    
    res.send("Acá va el código para agregar un equipos")
});
server.delete("/api/teams/:id", (req, res)=>{
    res.send("Aquí va el código para borrar un equipo", req.params)
});

server.use(express.static("public"));

server.listen(PORT, (err)=>{
    err? console.log(`Server down du to: ${err}`)
    :
    console.log(`Server running on http://localhost:${PORT}`)
});