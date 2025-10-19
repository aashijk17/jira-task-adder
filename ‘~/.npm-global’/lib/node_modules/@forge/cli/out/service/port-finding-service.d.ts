import { ConfigFile } from '@forge/cli-shared';
export interface PortFindingService {
    findPorts(minPort?: number): Promise<Record<string, number>>;
    findPortAfter(portsTaken: number[]): Promise<number | undefined>;
}
export declare class ConfigFilePortFindingService implements PortFindingService {
    private readonly configFile;
    constructor(configFile: ConfigFile);
    findPorts(minPort?: number): Promise<Record<string, number>>;
    findPortAfter(portsTaken: number[]): Promise<number | undefined>;
}
//# sourceMappingURL=port-finding-service.d.ts.map