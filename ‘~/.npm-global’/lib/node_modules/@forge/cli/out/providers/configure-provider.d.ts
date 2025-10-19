import { AppConfigProvider } from '@forge/cli-shared';
export interface ProviderDetails {
    environment: string;
    providerKey: string;
    clientSecret: string;
}
export interface AppProviderDetails extends ProviderDetails {
    appId: string;
}
export interface ConfigureProviderClient {
    configureProvider(details: AppProviderDetails): Promise<void>;
}
export declare class ConfigureProviderCommand {
    private readonly client;
    private readonly getAppConfig;
    constructor(client: ConfigureProviderClient, getAppConfig: AppConfigProvider);
    execute(details: ProviderDetails): Promise<void>;
}
//# sourceMappingURL=configure-provider.d.ts.map