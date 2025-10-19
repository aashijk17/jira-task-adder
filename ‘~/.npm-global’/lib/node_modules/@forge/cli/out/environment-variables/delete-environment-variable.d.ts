import { AppConfigProvider } from '@forge/cli-shared';
export interface EnvironmentVariableDetails {
    environment: string;
    key: string;
}
export interface AppEnvironmentVariableDetails extends EnvironmentVariableDetails {
    appId: string;
}
export interface DeleteEnvironmentVariableClient {
    deleteEnvironmentVariable(details: AppEnvironmentVariableDetails): Promise<void>;
}
export declare class DeleteEnvironmentVariableCommand {
    private readonly client;
    private readonly getAppConfig;
    constructor(client: DeleteEnvironmentVariableClient, getAppConfig: AppConfigProvider);
    execute(details: EnvironmentVariableDetails): Promise<void>;
}
//# sourceMappingURL=delete-environment-variable.d.ts.map