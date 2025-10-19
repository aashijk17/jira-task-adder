import { Worker } from './worker';
import { WorkerInfo } from './worker-info';
export declare class VersionCheckWorker implements Worker {
    private readonly workerInfo;
    constructor(workerInfo: WorkerInfo | undefined);
    doWork(): Promise<void>;
}
//# sourceMappingURL=version-check-worker.d.ts.map