export declare const timer: (timeout: number) => Promise<void>;
export declare const handleWithTimeout: (action: () => Promise<void | void[]>, timeout: number) => Promise<void>;
export interface Worker {
    doWork(): Promise<void>;
}
//# sourceMappingURL=worker.d.ts.map