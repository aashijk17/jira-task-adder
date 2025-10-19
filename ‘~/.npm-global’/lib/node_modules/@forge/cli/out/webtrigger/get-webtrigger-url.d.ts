import { AppConfigProvider } from '@forge/cli-shared';
import { AppEnvironmentClient } from '@forge/cli-shared';
import { Installation } from '../service/installation-service';
import { WebTriggerGraphQLClient } from './graphql-client';
export interface Context {
    contextId: string;
    environmentARI: string;
    extensionKey: string;
}
export interface WebTriggerUrlDetails {
    appId: string;
    contextId: string;
    environmentId: string;
    triggerKey: string;
}
export interface WebTriggerClient {
    getInstallation(appId: string, installationId: string): Promise<Installation>;
}
export declare class GetWebTriggerURLCommand {
    private readonly getAppConfig;
    private readonly webTriggerClient;
    private readonly appEnvironmentClient;
    private readonly webTriggerGraphqlClient;
    constructor(getAppConfig: AppConfigProvider, webTriggerClient: WebTriggerClient, appEnvironmentClient: AppEnvironmentClient, webTriggerGraphqlClient: WebTriggerGraphQLClient);
    execute(installationId: string, functionKey: string): Promise<string>;
}
//# sourceMappingURL=get-webtrigger-url.d.ts.map