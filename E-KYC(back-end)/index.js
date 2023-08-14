const express = require("express")
const cors  = require("cors")
const bodyparser = require("body-parser")
require("dotenv").config()
const pgp = require('pg-promise')()

const db = pgp('postgres://postgres:postgres@localhost:5432/e_kycdb')

// Initialising Application
const app = express();  

// Middleware
app.use(bodyparser.json())
app.use(cors())
app.use(express.json())

// app.get("/data", (request, response)=>{
//     db.any("select * from users")
//     .then((result)=>{
//         console.log(result);
//         response.send(result)
//     })
//     .catch((error)=>{
//         response.send(error)
//     })
// })

app.post("/data", (request, response)=>{
    db.any(
        "insert into users (userId, password) values($1,$2)",
        [request.body.userId,request.body.password]
    )
    .then((result)=>{
        //console.log(result) : To check output
        response.send('LOGIN Created')
    })
    .catch((error)=>{
        //console.log(error): To check output   
        response.send(error)
    })
})

app.post("/logged", (request, response)=>{
    console.log(request.body);
    response.status(200).send("Logged In:)")
})

app.post("/searched", (request, response)=>{
    console.log(request.body);
    response.status(200).send("Searched:)")
})

app.post("/created", (request, response)=>{
    console.log(request.body);
    response.status(200).send("Created:)")
})

app.listen(process.env.PORT, ()=>(console.log("Server Running At http://localhost:"+process.env.PORT))) 