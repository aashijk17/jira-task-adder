import { AppConfigProvider } from '@forge/cli-shared';
export interface EnvironmentDetails {
    environmentKey: string;
}
export interface AppEnvironmentDetails extends EnvironmentDetails {
    appId: string;
}
export interface CreateEnvironmentClient {
    createEnvironment(details: AppEnvironmentDetails): Promise<void>;
}
export declare class CreateEnvironmentCommand {
    private readonly client;
    private readonly getAppConfig;
    constructor(client: CreateEnvironmentClient, getAppConfig: AppConfigProvider);
    execute(details: EnvironmentDetails): Promise<void>;
}
//# sourceMappingURL=create-environment.d.ts.map