/**
 * This is a mock file that contains service methods. It returns mock data and you shouldn't change it.
 */

import { ExternalEmployee } from '../types';

export class ExternalIntegrationService {
  async getExternalEmployees(companyId: number): Promise<ExternalEmployee[]> {
    return mockExternalEmployees;
  }
}

const mockExternalEmployees = [
  {
    Id: 'user1',
    GivenName: 'John',
    FamilyName: 'Doe',
    Email: 'johndoe@gmail.com',
    DateOfBirth: '11/10/1996',
    PrimaryAddr: {
      StreetLine: 'Rue Mouffetard, 43',
      Country: 'France',
      City: 'Paris',
    },
  },
  {
    Id: 'user2',
    GivenName: 'John',
    FamilyName: 'Bonjovi',
    Email: 'johnbon@gmail.com',
    DateOfBirth: '31/01/1991',
    PrimaryAddr: {
      StreetLine: 'High St',
      Country: 'Manchester',
      City: 'UK',
    },
  },
  {
    Id: 'user3',
    GivenName: 'Mary',
    FamilyName: 'Lee',
    Email: 'mary@gmail.com',
    DateOfBirth: '01/12/1987',
    PrimaryAddr: {
      StreetLine: 'High St',
      Country: 'Manchester',
      City: 'UK',
    },
  },
];
