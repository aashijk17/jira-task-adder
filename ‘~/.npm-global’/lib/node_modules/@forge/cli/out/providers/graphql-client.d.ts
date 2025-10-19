import { GraphQLClient } from '@forge/cli-shared';
import { AppProviderDetails, ConfigureProviderClient } from './configure-provider';
export declare class GraphqlClient implements ConfigureProviderClient {
    private readonly graphqlClient;
    constructor(graphqlClient: GraphQLClient);
    configureProvider(details: AppProviderDetails): Promise<void>;
}
//# sourceMappingURL=graphql-client.d.ts.map