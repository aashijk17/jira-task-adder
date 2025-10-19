import { AppConfigProvider } from '@forge/cli-shared';
export interface EnvironmentVariablesDetails {
    environment: string;
}
export interface AppEnvironmentVariablesDetails extends EnvironmentVariablesDetails {
    appId: string;
}
export interface AppEnvironmentVariable {
    key: string;
    value?: string | null;
    encrypt: boolean;
}
export interface ListEnvironmentVariablesClient {
    listEnvironmentVariables(details: AppEnvironmentVariablesDetails): Promise<AppEnvironmentVariable[] | null | undefined>;
}
export declare class ListEnvironmentVariablesCommand {
    private readonly client;
    private readonly getAppConfig;
    constructor(client: ListEnvironmentVariablesClient, getAppConfig: AppConfigProvider);
    execute(details: EnvironmentVariablesDetails): Promise<AppEnvironmentVariable[] | null | undefined>;
}
//# sourceMappingURL=list-environment-variables.d.ts.map