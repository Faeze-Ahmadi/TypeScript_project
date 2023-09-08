import { contactInfoType, contactProps ,} from "./types";

import {
    email,
    password,
    Device,
    button,
    button_2,
    removeButton,
    drawer_List,
    listcontactas,
} from "./importer.js";

import {contactList} from "./states.js";

import {createListItem, validateFieldes} from "./functions.js";


export const showContactButtonHandler = () => {
    button_2?.addEventListener("click", () => {
        drawer_List?.classList.remove("bottom-[-100%]");
        drawer_List?.classList.add("bottom-[-0%]");
    });    
};

export const closeContactButtonHandler = () => {
    removeButton?.addEventListener("click", () => {
        drawer_List?.classList.remove("bottom-[-0%]");
        drawer_List?.classList.add("bottom-[-100%]");
    });   
};

const validateCreateContact = (contactInfo: contactInfoType) => {
    if (!validateFieldes(contactInfo.contactName, contactInfo.contactNumber.toString()))
        return alert("fill all fields!");
        throw Error("fill all fields!");
};

export const HandlerCreatContact = () => {
    validateCreateContact({
        contactName: email!.value, 
        contactNumber: password!.value
    });
    button?.addEventListener("click", () => {
        console.log(Device?.checked)
        const newContact: contactProps = {
            id: crypto.randomUUID(),
            contactName: email?.value ?? '',
            contactNumber: password?.value ?? '',
            storage: Device?. checked ? "Device" : "SIM",
            avatar: null,
        }
        contactList.push(newContact);
        
        const listItem = createListItem({
            contactName: newContact.contactName,
            contactNumber: newContact.contactNumber.toString(),
        });

        listcontactas?.appendChild(listItem);
    });   
};