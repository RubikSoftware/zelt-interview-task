import { ExternalIntegrationService } from "./mock/integration.service";
import { UserBankDetailsService, UserService } from "./mock/user.service";

export interface MatchedUser {
  userId: number;
  identifier: string;
  employeeID?: string;
}

/**
 * UserEnrichmentService
 * Retrieves users from an external source and syncs the data with our local DB.
 */
export class UserEnrichmentService {
  constructor(
    // userService manages basic user information from our local DB
    private readonly userService: UserService,

    // userBankService manages user bank information from our local DB
    private readonly userBankService: UserBankDetailsService,

    // ExternalIntegrationService allows us to retrieve user data from an external source.
    // We use it to fetch users to update their information locally using `userService`
    private readonly integrationService: ExternalIntegrationService
  ) {}

  /**
   * Syncs users from ExternalIntegrationService to our local UserService
   */
  async enrichUsers(
    companyId: number,
    usersToSync: MatchedUser[]
  ): Promise<number> {
    // TODO: implementation goes here
    throw new Error("Sadly, this method is not yet implemented.");

    // this.userService.updateUser(...);
  }
}
