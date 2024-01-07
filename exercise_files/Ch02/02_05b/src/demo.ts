interface Contact {
    id: number;
    name: string;
    // clone(name: string): Contact;
}

type Task<T> = () => Promise<T>;

interface UserContact<TExternalId> {
    id: number;
    name: string;
    username: string;
    externalId: TExternalId;
    loadExternalId: Task<TExternalId>;
}

function clone<T1, T2 extends T1> (source: T1) : T2 {
    // func (source: Contact) => Contact
    return Object.apply({}, source);
}

const a: Contact = {
    id: 123,
    name: "Simon"
};

const b = clone<Contact, UserContact<String>>(a);

const dateRange = {startDate: Date.now(), endDate:Date.now()}
const  dateRangeCopy = clone(dateRange)

