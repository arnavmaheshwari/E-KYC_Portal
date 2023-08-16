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

// app.post("/data", (request, response)=>{
//     db.any(
//         "INSERT INTO users (userid, password) values($1,$2)",
//         [request.body.userId,request.body.password]
//     )
//     .then((result)=>{
//         //console.log(result) : To check output
//         response.send('LOGIN Created')
//     })
//     .catch((error)=>{
//         //console.log(error): To check output   
//         response.send(error)
//     })
// })

app.post("/logged", (request, response)=>{
    db.any(
        "select COUNT(*) from users where user_id=$1 and password=$2",
        [request.body.userId,request.body.password]
    )
    .then((result)=>{
        console.log(result)
        response.status(200).send(result)
    })
    .catch((error)=>{
        response.status(400).send(error)
    })
})

app.post("/searched", (request, response)=>{
    db.any(
        "select client.itgi_unique_identifier from client_kyc as client, kyc_documents as kyc where client.client_type=$1 and client.first_name=$2 and client.date_of_birth=$3 and kyc.id_name=$4 and kyc.id_number=$5",
        [request.body.clientType,request.body.firstName,request.body.dateofBirth,request.body.idType,request.body.idNumber]
    )
    .then((result)=>{
        console.log(result)
        response.status(200).send(result)
    })
    .catch((error)=>{
        response.status(400).send(error)
    })
})

app.post("/created", (request, response)=>{
    console.log(request.body);
    response.status(200).send("Created:)")
})


// Random string generated here so that uniqueness can be checked, plus when front-end changes, still the back-end remains, so string can be generated uniquely

const generateRandomString = ()=>{
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const randomArray = Array.from(
        { length: 14 },
        (v, k) => chars[Math.floor(Math.random() * chars.length)]
      );
    
      const randomString = randomArray.join("");
      return randomString;
    };

app.listen(process.env.PORT, ()=>(console.log("Server Running At http://localhost:"+process.env.PORT))) 