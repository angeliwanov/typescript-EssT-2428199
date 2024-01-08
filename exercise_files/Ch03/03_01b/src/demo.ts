type ContactName = string;

type ContactStatus =  "active" | "inactive" | "new";

type ContactBirthDate = Date | number | string;

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
    email?: string;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type AddressableContact = Contact & Address;

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active", 
}

type ContactFields = keyof Contact;

const field: ContactFields = "email";

// function getValue(source, property: keyof Contact) {
//     return source[property];
// }

const contact: Contact = { 
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
    email: "dfdj"
}

function getValue<T>(source: T, property: keyof T) { 
    return source[property];
}

const value = getValue(contact, "status")
const value2 = getValue({min: 1, max: 2}, "min")
console.log(value)