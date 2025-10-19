export interface Option {
    requireUserArg: boolean;
}
export interface CommandOptions {
    [key: string]: Option;
}
export interface CommandConfig {
    [key: string]: CommandOptions;
}
export interface AutocompleteConfig {
    commands: CommandConfig;
    options: CommandOptions;
}
//# sourceMappingURL=types.d.ts.map