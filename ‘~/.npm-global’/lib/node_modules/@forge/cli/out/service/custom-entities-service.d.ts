import { AppConfigProvider, AppOauthClientIdClient } from '@forge/cli-shared';
import { AppCustomEntitiesIndexes, CustomEntityIndex, EntitiesClient } from '../entities/list-indexes';
export declare class CustomEntitiesService {
    private readonly appConfigProvider;
    private readonly appOauthClient;
    private readonly entitiesGraphqlClient;
    constructor(appConfigProvider: AppConfigProvider, appOauthClient: AppOauthClientIdClient, entitiesGraphqlClient: EntitiesClient);
    sortTransformedIndexes(transformedIndexes: CustomEntityIndex[]): CustomEntityIndex[];
    listEntitiesIndexes(environment: string): Promise<AppCustomEntitiesIndexes>;
    isReindexingInProgress(environment: string): Promise<boolean>;
}
//# sourceMappingURL=custom-entities-service.d.ts.map