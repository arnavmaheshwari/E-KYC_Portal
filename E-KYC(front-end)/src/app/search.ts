export class Search{
    public clientType: string;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public gender: string;
    public dateofBirth: any;
    public idType: string;
    public idNumber: any;
 
    constructor(clientType: string,
     firstName: string,
     middleName: string,
     lastName: string,
     gender: string,
     dateofBirth: any, 
     idType: string,
     idNumber: any){
         this.clientType=clientType;
         this.firstName=firstName;
         this.middleName=middleName;
         this.lastName=lastName;
         this.gender=gender;
         this.dateofBirth=dateofBirth;
         this.idType=idType;
         this.idNumber=idNumber;
    }
 }