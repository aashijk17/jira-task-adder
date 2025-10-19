import { AppEnvironmentVariable, GraphQLClient, Maybe, UserError } from '@forge/cli-shared';
import { AppEnvironmentVariableDetails as DeleteAppEnvironmentVariableDetails, DeleteEnvironmentVariableClient } from './delete-environment-variable';
import { AppEnvironmentVariablesDetails as ListAppEnvironmentVariablesDetails, ListEnvironmentVariablesClient } from './list-environment-variables';
import { AppEnvironmentVariableDetails as SetAppEnvironmentVariableDetails, SetEnvironmentVariableClient } from './set-environment-variable';
export declare class MissingAppError extends UserError {
}
export declare class MissingAppEnvironmentError extends Error {
}
export declare class GraphqlClient implements SetEnvironmentVariableClient, DeleteEnvironmentVariableClient, ListEnvironmentVariablesClient {
    private readonly graphqlClient;
    constructor(graphqlClient: GraphQLClient);
    listEnvironmentVariables(details: ListAppEnvironmentVariablesDetails): Promise<Maybe<AppEnvironmentVariable[]> | undefined>;
    setEnvironmentVariable(details: SetAppEnvironmentVariableDetails): Promise<void>;
    deleteEnvironmentVariable(details: DeleteAppEnvironmentVariableDetails): Promise<void>;
}
//# sourceMappingURL=graphql-client.d.ts.map