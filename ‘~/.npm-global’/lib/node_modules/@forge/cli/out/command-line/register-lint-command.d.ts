import { Dependencies } from './dependency-injection';
export interface LintActionParams {
    environment: string;
    fix: boolean;
}
export declare const registerCommands: ({ cmd, controllers: { lintController } }: Dependencies) => void;
//# sourceMappingURL=register-lint-command.d.ts.map