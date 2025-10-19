import { GraphQLClient } from '@forge/cli-shared';
export declare class EntitiesGraphqlClient {
    private readonly graphQLClient;
    constructor(graphQLClient: GraphQLClient);
    getEntitiesDefinitions(oauthClientId: string): Promise<any[]>;
}
//# sourceMappingURL=graphql-client.d.ts.map