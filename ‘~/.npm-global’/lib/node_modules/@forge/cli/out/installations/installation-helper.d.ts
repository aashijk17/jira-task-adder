import { Installation } from '../service/installation-service';
import { UI } from '@forge/cli-shared';
export declare function validateInstallationId(installationId?: string): string;
export declare function selectSingleInstallation(ui: UI, installations: Installation[], installationTablePrompt: string, installationTableOverview: string): Promise<Installation>;
//# sourceMappingURL=installation-helper.d.ts.map