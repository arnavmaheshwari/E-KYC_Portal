export class Login{
    public userId:string;
    public password:any;

    constructor(userId:string,password:any){
        this.userId=userId;
        this.password=password;
    }
}

// ng g cl login: This command will generate a login class in the login folder.
//Using an object of a class allows us to send data directly in the form of a JSON object.