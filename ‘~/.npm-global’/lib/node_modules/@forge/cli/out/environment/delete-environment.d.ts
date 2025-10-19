import { AppConfigProvider } from '@forge/cli-shared';
export interface DeleteEnvironmentOutput {
    environmentKey: string;
    successful: boolean;
    error?: Error;
}
export interface DeleteEnvironmentDetails {
    appId: string;
    environmentKey: string;
}
export interface BatchEnvironmentDetails {
    environmentKeys: string[];
}
export interface BatchDeleteEnvironmentDetails extends BatchEnvironmentDetails {
    appId: string;
}
export interface DeleteEnvironmentClient {
    deleteEnvironment(details: DeleteEnvironmentDetails): Promise<boolean>;
    deleteEnvironments(details: BatchDeleteEnvironmentDetails): Promise<DeleteEnvironmentOutput[]>;
}
export declare class DeleteEnvironmentCommand {
    private readonly client;
    private readonly getAppConfig;
    constructor(client: DeleteEnvironmentClient, getAppConfig: AppConfigProvider);
    batchExecute(details: BatchEnvironmentDetails): Promise<DeleteEnvironmentOutput[]>;
}
//# sourceMappingURL=delete-environment.d.ts.map