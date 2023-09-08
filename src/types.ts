export type contactProps = {
    id: string;
    contactName: string;
    contactNumber: string | Number;
    storage: "SIM" | "Device";
    avatar: string | null;

}

export type contactListType = contactProps[];

export type contactInfoType = {
    contactName: string,
    contactNumber: string | number
};