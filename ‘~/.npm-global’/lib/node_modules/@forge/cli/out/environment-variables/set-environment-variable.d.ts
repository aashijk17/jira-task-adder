import { AppConfigProvider } from '@forge/cli-shared';
export interface EnvironmentVariableDetails {
    environment: string;
    encrypt: boolean;
    key: string;
    value: string;
}
export interface AppEnvironmentVariableDetails extends EnvironmentVariableDetails {
    appId: string;
}
export interface SetEnvironmentVariableClient {
    setEnvironmentVariable(details: AppEnvironmentVariableDetails): Promise<void>;
}
export declare class SetEnvironmentVariableCommand {
    private readonly client;
    private readonly getAppConfig;
    constructor(client: SetEnvironmentVariableClient, getAppConfig: AppConfigProvider);
    execute(details: EnvironmentVariableDetails): Promise<void>;
}
//# sourceMappingURL=set-environment-variable.d.ts.map