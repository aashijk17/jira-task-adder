import { AppDeployment, AppDeploymentLogEvent, AppDeploymentSnapshotLogEvent, AppDeploymentTransitionEvent, GraphQLClient } from '@forge/cli-shared';
export interface DeployMonitorDetails {
    appId: string;
    deploymentId: string;
    environmentKey: string;
}
export declare type DeployMonitor = Pick<AppDeployment, 'stages' | 'errorDetails' | 'status'> & {
    requestId: string;
};
export declare type DeployMonitorEvent = AppDeploymentLogEvent | AppDeploymentSnapshotLogEvent | AppDeploymentTransitionEvent;
export interface DeployMonitorClient {
    getDeployment(details: DeployMonitorDetails): Promise<DeployMonitor>;
}
export declare class DeployMonitorGraphqlClient implements DeployMonitorClient {
    private readonly graphqlClient;
    constructor(graphqlClient: GraphQLClient);
    getDeployment({ appId, environmentKey, deploymentId }: DeployMonitorDetails): Promise<DeployMonitor>;
}
//# sourceMappingURL=deploy-monitor-graphql-client.d.ts.map