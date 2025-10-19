import { CustomEntitiesService } from '../service/custom-entities-service';
export interface CustomEntityIndex {
    entityName: string;
    indexName: string;
    indexStatus: CustomEntityIndexStatus;
    partition: string;
    range: string;
}
export declare enum CustomEntityIndexStatus {
    ACTIVE = "ACTIVE",
    CREATING = "CREATING"
}
export interface AppCustomEntitiesIndexes {
    appId: string;
    oauthClientId: string;
    environmentId: string;
    indexes: CustomEntityIndex[];
}
export interface EntitiesClient {
    getEntitiesDefinitions(oauthClientId: string): Promise<any[]>;
}
export declare class ListEntitiesIndexesCommand {
    private readonly customEntitiesService;
    constructor(customEntitiesService: CustomEntitiesService);
    execute(environment: string): Promise<AppCustomEntitiesIndexes>;
}
//# sourceMappingURL=list-indexes.d.ts.map