export class kycDocument {
    public idType: string;
    public idName: string;
    public idNumber: string;
    public fileName: string;
    public fileExtension: string;
    public fileBase64: any;

    constructor(
        idType: string,
        idName: string,
        idNumber: string,
        fileName: string,
        fileExtension: string,
        fileBase64: any 
    ) {
        this.idType = idType;
        this.idName = idName;
        this.idNumber = idNumber;
        this.fileName = fileName;
        this.fileExtension = fileExtension;
        this.fileBase64 = fileBase64;
     }
}