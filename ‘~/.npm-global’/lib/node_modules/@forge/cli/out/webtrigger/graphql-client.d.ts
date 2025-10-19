import { GraphQLClient, GraphQlMutationError } from '@forge/cli-shared';
import { WebTriggerUrlDetails } from './get-webtrigger-url';
export declare class WebTriggerCreationError extends GraphQlMutationError {
    constructor(message: string, requestId: string | undefined, code: string | undefined);
}
export declare class MissingWebTriggerUrlError extends GraphQlMutationError {
    constructor(requestId: string | undefined);
}
export declare class WebTriggerGraphQLClient {
    private readonly graphQLClient;
    constructor(graphQLClient: GraphQLClient);
    createWebTriggerUrl({ appId, contextId, environmentId, triggerKey }: WebTriggerUrlDetails): Promise<string>;
}
//# sourceMappingURL=graphql-client.d.ts.map