import { ConfigFile } from '@forge/cli-shared';
import { Dependencies } from './dependency-injection';
export declare function getManifestEntities(configFile: ConfigFile): Promise<{
    entities: string[];
}>;
export interface ListIndexesData {
    environment: string;
}
export declare function listIndexes(data: ListIndexesData, configFile: ConfigFile, { ui, commands: { listEntitiesIndexesCommand } }: Dependencies): Promise<void>;
export declare const registerCommands: (deps: Dependencies) => void;
//# sourceMappingURL=register-storage-commands.d.ts.map