export interface ExternalEmployeeAddress {
  StreetLine: string;
  Country: string;
  City: string;
}

export interface ExternalEmployeeBankAccount {
  BankNo: number;
  AccountNumber: string;
  Currency: string;
}

export interface ExternalEmployee {
  Id: string;
  FamilyName: string;
  GivenName: string;
  Email: string;
  PrimaryAddr: ExternalEmployeeAddress;
  BankAccount: ExternalEmployeeBankAccount;
  DateOfBirth: string;
}

export interface UserBankAccount {
  bankId: number;
  accountNumber: string;
  currency: string;
}

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  dob: Date;
  UserAddresses: Partial<UserAddress>[];
  BankAccounts: Partial<UserBankAccount>[];
}

export interface UserAddress {
  userAddressId?: number;
  streetName: string;
  city: string;
  country: string;
}
