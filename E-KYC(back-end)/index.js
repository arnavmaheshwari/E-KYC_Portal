const express = require("express")
const cors  = require("cors")
const bodyparser = require("body-parser")
require("dotenv").config()
const authentication = require("./routes/authentication")
const kyc = require("./routes/kyc")

// Initialising Application
const app = express();  

// To extend payload size
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

// Middleware
app.use(bodyparser.json())
app.use(cors())

app.use("/",authentication)
app.use("/kyc",kyc)

app.post("/", (request, response)=>{})

app.post("/kyc", (request, response)=>{})

app.listen(process.env.PORT, ()=>(console.log("Server Running At http://localhost:"+process.env.PORT))) 