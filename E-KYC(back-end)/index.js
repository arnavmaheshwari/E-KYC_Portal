const express = require("express")
const cors  = require("cors")
const bodyparser = require("body-parser")
require("dotenv").config()
const pgp = require('pg-promise')()

const db = pgp('postgres://postgres:postgres@localhost:5432/e_kycdb')

// Initialising Application
const app = express();  

// To extend payload size
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));

// Middleware
app.use(bodyparser.json())
app.use(cors())
// app.use(express.json())

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
    // console.log(request.body)
    db.any(
        "select * from client_kyc as client, kyc_documents as kyc where client.client_type=$1 and client.first_name=$2 and client.date_of_birth=$3 and kyc.id_name=$4 and kyc.id_number=$5",
        [request.body.clientType,request.body.firstName,request.body.dateofBirth,request.body.idType,request.body.idNumber]
    )
    .then((result)=>{
        // console.log(result)
        if(result.length!=0){
        res = {
            resu :result,
            status: 200
        }

        response.send(res);
    }
    else{
        res = {
            resu :result,
            status: 400
        }
        response.send(res);
    }
    })

    .catch((error)=>{
        response.send(error)
    })
})

//For storing id of the record in the client_kyc table
var ID=0;

app.post("/created", (request, response)=>{
    db.any(
        "insert into client_kyc (client_type,prefix,first_name,middle_name,last_name,gender,date_of_birth,related_person_prefix,related_person_first_name,related_person_middle_name,related_person_last_name,relationship_type,mobile_number,email_address,address_line1,city,district,state,country,pin_code,correspondence_address_line1,correspondence_city,correspondence_district,correspondence_state,correspondence_country,correspondence_pin_code,itgi_unique_identifier) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)",
        [request.body.clientType,request.body.prefix,request.body.firstName,request.body.middleName,request.body.lastName,request.body.gender,request.body.dateofBirth,request.body.relatedPersonPrefix,request.body.relatedPersonFirstName,request.body.relatedPersonMiddleName,request.body.relatedPersonLastName,request.body.relationshipType,request.body.mobileNumber,request.body.emailAddress,request.body.addressLine1,request.body.city,request.body.district,request.body.state,request.body.country,request.body.pinCode,request.body.correspondenceAddressLine1,request.body.correspondenceCity,request.body.correspondenceDistrict,request.body.correspondenceState,request.body.correspondenceCountry,request.body.correspondencePinCode,generateRandomString()]
    )
    .then((result)=>{
        // console.log(result) // To check output
        db.any(
            "select client.id from client_kyc as client where client.client_type=$1 and client.first_name=$2 and client.date_of_birth=$3",
            [request.body.clientType,request.body.firstName,request.body.dateofBirth]
        )
        .then((results)=>{
            ID=results[0].id;
            console.log(ID)
            console.log(results)
            res = {
                resu :results,
                status: 200
            }
            console.log(results)
            response.status(200).send(res);
        })
        .catch((error)=>{
            response.status(400).send(error)
        })
        // response.send('KYC Created')
    })
    .catch((error)=>{
        response.send(error)
    });
})
    // console.log(request.body.kycDocument[0])
    

app.post("/documents", (request, response)=>{

    //  console.log(request.body[0])
    //  console.log(request.body[1])
    // console.log(request.body[2])
    db.any(
        "insert into kyc_documents (id_type, id_name,id_number,file_name,file_extension,file_base64,client_id) values($1,$2,$3,$4,$5,$6,$7),($8,$9,$10,$11,$12,$13,$14),($15,$16,$17,$18,$19,$20,$21)",
        [request.body[0].idType,request.body[0].idName,request.body[0].idNumber,request.body[0].fileName,request.body[0].fileExtension,request.body[0].fileBase64,ID,request.body[1].idType,request.body[1].idName,request.body[1].idNumber,request.body[1].fileName,request.body[1].fileExtension,request.body[1].fileBase64,ID,request.body[2].idType,request.body[2].idName,request.body[2].idNumber,request.body[2].fileName,request.body[2].fileExtension,request.body[2].fileBase64,ID]
    )
    .then((result)=>{
        //console.log(result) : To check output
        db.any(
            "select distinct client.itgi_unique_identifier from client_kyc as client, kyc_documents as kyc where kyc.client_id=$1",
            [ID]
        )
        .then((results)=>{
            // console.log(result)
            // console.log(ID)
            res = {
                resu :results,
                status: 200
            }
            response.status(200).send(res);
        })
    })
    .catch((error)=>{
        //console.log(error): To check output   
        response.status(400).send(error)
    })
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
    // console.log(generateRandomString());

app.listen(process.env.PORT, ()=>(console.log("Server Running At http://localhost:"+process.env.PORT))) 