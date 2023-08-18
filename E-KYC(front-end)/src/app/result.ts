export class Result {
    public  clientType: string;
    public  prefix: string;
    public  firstName: string;
    public  middleName: string;
    public  lastName: string;
    public  gender: string;
    public  dateofBirth: any;
    public  relatedPersonPrefix: string;
    public  relatedPersonFirstName: string;
    public  relatedPersonMiddleName: string;
    public  relatedPersonLastName: string;
    public  relationshipType: string;
    public  mobileNumber: string;
    public  emailAddress: string ;
    public  addressLine1: string;
    public  city: string;
    public  district: string;
    public  state: string;
    public  country: string;
    public  pinCode: string;
    public  correspondenceAddressLine1: string;
    public  correspondenceCity: string;
    public  correspondenceDistrict: string;
    public  correspondenceState: string;
    public  correspondenceCountry: string;
    public  correspondencePinCode: string;
    public idType: string;
    public idName: string;
    public idNumber: string;
    public ITGI_UniqueIdentifier: string;
   
      constructor(clientType: string,
          prefix: string,
          firstName: string,
          middleName: string,
          lastName: string,
          gender: string,
          dateofBirth: any,
          relatedPersonPrefix: string,
          relatedPersonFirstName: string,
          relatedPersonMiddleName: string,
          relatedPersonLastName: string,
          relationshipType: string,
          mobileNumber: string,
          emailAddress: string,
          addressLine1: string,
          city: string,
          district: string,
          state: string,
          country: string,
          pinCode: string,
          correspondenceAddressLine1: string,
          correspondenceCity: string,
          correspondenceDistrict: string,
          correspondenceState: string,
          correspondenceCountry: string,
          correspondencePinCode: string,
          idType: string,
          idName: string,
          idNumber: string,
          ITGI_UniqueIdentifier: string){
              this.clientType=clientType;
              this.prefix=prefix;
              this.firstName=firstName;
              this.middleName=middleName;
              this.lastName=lastName;
              this.gender=gender;
              this.dateofBirth=dateofBirth;
              this.relatedPersonPrefix=relatedPersonPrefix;
              this.relatedPersonFirstName=relatedPersonFirstName;
              this.relatedPersonMiddleName=relatedPersonMiddleName;
              this.relatedPersonLastName=relatedPersonLastName;
              this.relationshipType=relationshipType;
              this.mobileNumber=mobileNumber;
              this.emailAddress=emailAddress;
              this.addressLine1=addressLine1;
              this.city=city;
              this.district=district;
              this.state=state;
              this.country=country;
              this.pinCode=pinCode;
              this.correspondenceAddressLine1=correspondenceAddressLine1;
              this.correspondenceCity=correspondenceCity;
              this.correspondenceDistrict=correspondenceDistrict;
              this.correspondenceState=correspondenceState;
              this.correspondenceCountry=correspondenceCountry;
              this.correspondencePinCode=correspondencePinCode;
              this.idType=idType;
              this.idName=idName;
              this.idNumber=idNumber;
              this.ITGI_UniqueIdentifier=ITGI_UniqueIdentifier;
      }
}