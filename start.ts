
// CODE HERE
interface Address {
    city: string;
    street: string;
    postalCode: string;
}
enum Role {
    staff = 'staff',
    student = 'studend',
    manager = 'manager',
    admin = 'admin',
}


interface Companies {

    id: number;
    name: string;
    description: string;
    location: {
        city: string;
        street: string;
        postalCode: string
    };
}

enum Gender {
    male = 'male',
    female = 'female',
    other = 'other',
}

interface Person {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: Gender;
}




const obj: Person = {
    id: 3487,
    name: 'Mario',
    surname: 'Rossi',
    age: 25,
    dateOfBirth: '1995-14-12',
    address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
    },
    role: Role.staff, // Ruoli possibili: 'staff', 'student', 'manager', 'admin'
    username: 'MarioRossi80',
    profilePhotoUrl: 'https://bit.ly/3yRngEP',
    companies: [
        {
            id: 148979,
            name: 'Develhope',
            description: 'La migliore',
            location: {
                city: 'Palermo',
                street: 'Via Libertà 58',
                postalCode: '90139'
            }
        },
        {
            id: 123123,
            name: 'Apple',
            description: 'E insomma...',
            location: {
                city: 'Cupertino',
                street: 'One Apple Park Way',
                postalCode: '95014'
            }
        }
    ],
    gender: Gender.male // Generi possibili: 'male', 'female', 'other'
}


