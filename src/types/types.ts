export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    address: IAddress;
}