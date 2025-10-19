import { GraphQLClient } from '@forge/cli-shared';
import { AppEnvironmentMigrationKeys } from '../service/migration-keys-service';
export declare class GraphqlClient {
    private readonly graphqlClient;
    constructor(graphqlClient: GraphQLClient);
    getLatestMigrationKeys(appId: string, environmentKey: string): Promise<AppEnvironmentMigrationKeys>;
}
//# sourceMappingURL=graphql-client.d.ts.map