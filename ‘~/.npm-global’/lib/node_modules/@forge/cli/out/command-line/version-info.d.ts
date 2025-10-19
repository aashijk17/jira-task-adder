export declare const VERSION_CACHE_KEY = "latest";
export declare const VERSION_CACHE_INTERVAL: number;
import { CLIDetails } from '@forge/cli-shared';
export declare const getCLIDetails: () => CLIDetails | undefined;
export declare const semverSupportedNodeVersion: string;
export declare const humanReadableSupportedNodeVersion: string;
export declare const cacheLatestVersion: (name: string) => Promise<void>;
export declare const clearVersionCache: (name: string) => void;
//# sourceMappingURL=version-info.d.ts.map