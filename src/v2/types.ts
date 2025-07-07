export interface ExternalEmployeeAddress {
  StreetLine: string;
  City: string;
  Country: string;
}

export interface ExternalEmployee {
  Id: string; // 'user1'
  FamilyName: string; // 'Doe'
  GivenName: string; // 'John'
  Email: string; // 'johndoe@gmail.com'
  PrimaryAddr: ExternalEmployeeAddress;
  DateOfBirth: string; // '11/10/1996'
}

export interface UserBankAccount {
  bankId: number;
  accountNumber: string;
  currency: string;
}

export interface UserAddress {
  userAddressId?: number;
  streetName: string;
  city: string;
  country: string;
}

export interface ExternalEmployeeBankAccount {
  BankNo: number;
  AccountNumber: string;
  Currency: string;
}
