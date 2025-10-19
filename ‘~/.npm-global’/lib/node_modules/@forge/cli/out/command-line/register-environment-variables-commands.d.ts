import { UI } from '@forge/cli-shared';
import { Dependencies } from './dependency-injection';
import { ListEnvironmentVariablesCommand } from '../environment-variables/list-environment-variables';
export declare function listEnvironmentVariableCommandHandler(ui: UI, listEnvironmentVariablesCommand: ListEnvironmentVariablesCommand, environment: string, json: boolean): Promise<void>;
export declare const registerCommands: ({ cmd, ...deps }: Dependencies) => void;
//# sourceMappingURL=register-environment-variables-commands.d.ts.map