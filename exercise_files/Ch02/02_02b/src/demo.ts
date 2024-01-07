interface Contact extends Address{
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address {
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

let primaryContact: Contact = {
  id: 1,
  name: 'John Doe',
  birthDate: new Date('1980-01-01'),
  street: '123 First Street',
  city: 'Anytown',
  country: 'USA',
  postalCode: '12345'
}