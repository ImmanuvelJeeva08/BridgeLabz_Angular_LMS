import { Bankinfo } from "./bankinfo";
import { Qualification } from "./qualification";

export class Onboard {
    id                 : number;
    firstName          : string;
    middleName         : string;
    lastName           : string;
    email              : string;
    mobileNum          : string;
    hiredCity          : string;
    parentName         : string;
    parentMobile       : string;
    temporaryAddress   : string;
    parentOccupation   : string;
    parentAnnualSalary : string;
    permanentAddress   : string;
    profileImage       : string;
    folderId           : string;
    status             : string;
    creatorStamp       : Date;
    updateStamp        : Date;
    bankInfo           : Bankinfo;
    qualificationInfo  : Qualification;
}
