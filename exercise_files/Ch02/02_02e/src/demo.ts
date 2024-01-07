interface Contact extends Address {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

enum ContactStatus {
    Active = 'active',
    Inactive = 'inactive',
    New = 'new'
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    status: ContactStatus.Active,
    postalCode: "12345",
    line1: "123 First Street",
    line2: "Apt. 1",
    province: "Ontario",
    region: "Toronto"
}

type ContactName = string;