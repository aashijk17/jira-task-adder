import { AnalyticsMessage, MessageHandler } from '../analytics-client/analytics-message-handler';
import { CachedConfigService } from '../service/cached-config-service';
import { Storage } from '../storage/local-file-storage';
import { Worker } from './worker';
export declare class AnalyticsMessageWorker implements Worker {
    private readonly storage;
    private readonly messageHandler;
    private readonly cachedConfigService;
    constructor(storage: Storage, messageHandler: MessageHandler<AnalyticsMessage | undefined>, cachedConfigService: CachedConfigService);
    doWork(): Promise<void>;
}
//# sourceMappingURL=analytics-message-worker.d.ts.map