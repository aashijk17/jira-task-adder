import { CLIDetails } from '@forge/cli-shared';
export interface WorkerInfo {
    name: string;
    checkForUpdate: boolean;
    environment: string;
}
export declare const getWorkerInfo: (cliDetails: CLIDetails | undefined) => WorkerInfo | undefined;
//# sourceMappingURL=worker-info.d.ts.map