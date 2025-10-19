import { UI } from '@forge/cli-shared';
import { Dependencies } from './dependency-injection';
import { CreateEnvironmentCommand } from '../environment/create-environment';
import { ListEnvironmentCommand } from '../environment/list-environment';
import { DeleteEnvironmentCommand } from '../environment/delete-environment';
interface RemoveEnvironmentArgs {
    environment?: string[];
    nonInteractive?: boolean;
}
export declare const createEnvironmentHandler: (ui: UI, createEnvironmentCommand: CreateEnvironmentCommand, environmentKey?: string) => Promise<void>;
export declare const listEnvironmentHandler: (ui: UI, listEnvironmentCommand: ListEnvironmentCommand) => Promise<void>;
export declare const deleteEnvironmentHandler: (ui: UI, options: RemoveEnvironmentArgs, listEnvironmentCommand: ListEnvironmentCommand, deleteEnvironmentCommand: DeleteEnvironmentCommand) => Promise<void>;
export declare const registerCommands: (deps: Dependencies) => void;
export {};
//# sourceMappingURL=register-environments-commands.d.ts.map