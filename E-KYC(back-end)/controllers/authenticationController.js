const db = require("../dbconnect")

const logged = async (request, response) => {
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
}

module.exports = {logged}