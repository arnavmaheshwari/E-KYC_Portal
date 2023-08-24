const db = require("../dbconnect")

const searched = async (request, response) => {
    db.any(
        "select * from client_kyc as client, kyc_documents as kyc where client.client_type=$1 and client.first_name=$2 and client.date_of_birth=$3 and kyc.id_name=$4 and kyc.id_number=$5",
        [request.body.clientType,request.body.firstName,request.body.dateofBirth,request.body.idType,request.body.idNumber]
    )
    .then((result)=>{
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
}

var ID=0;

const created = async (request, response) => {
    db.any(
        "insert into client_kyc (client_type,prefix,first_name,middle_name,last_name,gender,date_of_birth,related_person_prefix,related_person_first_name,related_person_middle_name,related_person_last_name,relationship_type,mobile_number,email_address,address_line1,city,district,state,country,pin_code,correspondence_address_line1,correspondence_city,correspondence_district,correspondence_state,correspondence_country,correspondence_pin_code,itgi_unique_identifier) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27)",
        [request.body.clientType,request.body.prefix,request.body.firstName,request.body.middleName,request.body.lastName,request.body.gender,request.body.dateofBirth,request.body.relatedPersonPrefix,request.body.relatedPersonFirstName,request.body.relatedPersonMiddleName,request.body.relatedPersonLastName,request.body.relationshipType,request.body.mobileNumber,request.body.emailAddress,request.body.addressLine1,request.body.city,request.body.district,request.body.state,request.body.country,request.body.pinCode,request.body.correspondenceAddressLine1,request.body.correspondenceCity,request.body.correspondenceDistrict,request.body.correspondenceState,request.body.correspondenceCountry,request.body.correspondencePinCode,generateRandomString()]
    )
    .then((result)=>{
        db.any(
            "select client.id from client_kyc as client where client.client_type=$1 and client.first_name=$2 and client.date_of_birth=$3",
            [request.body.clientType,request.body.firstName,request.body.dateofBirth]
        )
        .then((results)=>{
            ID=results[0].id;
            res = {
                resu :results,
                status: 200
            }
            response.status(200).send(res);
        })
        .catch((error)=>{
            response.status(400).send(error)
        })
    })
    .catch((error)=>{
        response.send(error)
    })
}

const documents = async (request, response) => {
    db.any(
        "insert into kyc_documents (id_type, id_name,id_number,file_name,file_extension,file_base64,client_id) values($1,$2,$3,$4,$5,$6,$7),($8,$9,$10,$11,$12,$13,$14),($15,$16,$17,$18,$19,$20,$21)",
        [request.body[0].idType,request.body[0].idName,request.body[0].idNumber,request.body[0].fileName,request.body[0].fileExtension,request.body[0].fileBase64,ID,request.body[1].idType,request.body[1].idName,request.body[1].idNumber,request.body[1].fileName,request.body[1].fileExtension,request.body[1].fileBase64,ID,request.body[2].idType,request.body[2].idName,request.body[2].idNumber,request.body[2].fileName,request.body[2].fileExtension,request.body[2].fileBase64,ID]
    )
    .then((result)=>{
        db.any(
            "select distinct client.itgi_unique_identifier from client_kyc as client, kyc_documents as kyc where kyc.client_id=client.id and kyc.client_id=$1",
            [ID]
        )
        .then((results)=>{
            res = {
                resu :results,
                status: 200
            }
            response.status(200).send(res);
        })
    })
    .catch((error)=>{
        response.status(400).send(error)
    })
}

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

module.exports = {searched, created, documents}