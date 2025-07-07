import { UserAddress, UserBankAccount } from "../types";

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  dob: Date;
  UserAddresses?: Partial<UserAddress>[];
  BankAccounts?: Partial<UserBankAccount>[];
}

const allUsers: User[] = [
  {
    userId: 1,
    firstName: "John",
    lastName: "Doe",
    emailAddress: "johndoe@gmail.com",
    dob: new Date("1996-10-11"),
  },
  {
    userId: 2,
    firstName: "John",
    lastName: "Bonjovi",
    emailAddress: "johnbon@gmail.com",
    dob: new Date("1991-01-31"),
  },
  {
    userId: 3,
    firstName: "Mary",
    lastName: "Lee",
    emailAddress: "mary@gmail.com",
    dob: new Date("1997-12-01"),
  },
];

/**
 * Checks is a value represents a valid date string in the format 'yyyy-mm-dd'
 */
function isValidDate(dateValue: unknown) {
  if (typeof dateValue !== "string") {
    return false;
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return false;
  }
  // could do more checks here...
  return true;
}

function checkDateOfBirth(user: User) {
  if (!isValidDate(user.dob)) {
    const invalidDateMessage = `Invalid date: Dates must be saved in 'yyyy-mm-dd' format. Received: ${JSON.stringify(
      user.dob
    )}`;
    throw new Error(invalidDateMessage);
  }
}

function mockUserUpdate(userId: number, user: User) {
  console.log("* Updating user record:");
  console.log(
    " - User Id:",
    userId,
    "\n - Name:",
    `${user.firstName} ${user.lastName}`,
    "\n - Email:",
    user.emailAddress,
    "\n - DOB: ",
    user.dob,
    "\n"
  );

  const u = allUsers.find((u) => u.userId === userId);
  if (!u) throw new Error("User not found");

  if (!u.firstName) throw new Error("Missing data: first name");
  if (!u.lastName) throw new Error("Missing data: last name");
  if (!u.emailAddress) throw new Error("Missing data: email address");
  if (!u.dob) throw new Error("Missing data: date of birth");

  checkDateOfBirth(u);

  Object.assign(u, user);
}

export class UserService {
  async getUser(companyId: number, userId: any): Promise<User | undefined> {
    return allUsers.find((user) => user.userId === userId);
  }

  async updateUser(userId: number, user: User): Promise<void> {
    mockUserUpdate(userId, user);
  }
}

export class UserBankDetailsService {
  async updateBankDetails(
    userId: number,
    bank: UserBankAccount
  ): Promise<void> {
    console.log("* Updating user bank record");
    console.log(" - User Id:", userId, "\n - Bank", `${bank}\n`);
  }

  async createBankDetails(
    userId: number,
    bank: UserBankAccount
  ): Promise<void> {
    console.log("* Creating user bank record");
    console.log(" - User Id:", userId, "\n - Bank", `${bank}\n`);
  }
}
