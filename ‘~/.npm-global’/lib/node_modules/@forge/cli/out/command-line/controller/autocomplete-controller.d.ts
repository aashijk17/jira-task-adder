import { UI } from '@forge/cli-shared';
export declare enum Argument {
    install = "install",
    uninstall = "uninstall"
}
export declare function assertNodeVersionSupported(version?: string): void;
export declare class AutocompleteController {
    private readonly ui;
    constructor(ui: UI);
    run(arg: string): Promise<void>;
}
//# sourceMappingURL=autocomplete-controller.d.ts.map