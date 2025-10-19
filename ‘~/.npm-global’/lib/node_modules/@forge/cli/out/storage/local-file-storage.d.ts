import { AnalyticsMessage } from '../analytics-client/analytics-message-handler';
export interface Storage {
    addAnalyticsEvent(message: AnalyticsMessage): void;
    deleteAnalyticsEvent(file: string): Promise<void>;
    getAnalytics(): string[];
    getAnalyticsEvent(file: string): Promise<AnalyticsMessage | undefined>;
}
export declare class LocalFileStorage implements Storage {
    private static STORAGE_PATHS;
    private static FOLDER;
    constructor();
    addAnalyticsEvent(message: AnalyticsMessage): void;
    getAnalyticsEvent(file: string): Promise<AnalyticsMessage | undefined>;
    getAnalytics(): string[];
    deleteAnalyticsEvent(file: string): Promise<void>;
}
//# sourceMappingURL=local-file-storage.d.ts.map