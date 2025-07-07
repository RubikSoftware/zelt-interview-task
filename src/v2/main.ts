import { ExternalIntegrationService } from "./mock/integration.service";
import { UserBankDetailsService, UserService } from "./mock/user.service";
import { MatchedUser, UserEnrichmentService } from "./user-enrichment.service";

const userEnrichmentService = new UserEnrichmentService(
  new UserService(),
  new UserBankDetailsService(),
  new ExternalIntegrationService()
);

async function main(): Promise<void> {
  // the users we want to sync
  const matchedUsers: MatchedUser[] = [
    { userId: 1, identifier: "John Doe" },
    { userId: 3, identifier: "Mary Lee" },
  ];

  const companyId = 1;

  await userEnrichmentService.enrichUsers(companyId, matchedUsers);
}

// npm run start:v2
main();
