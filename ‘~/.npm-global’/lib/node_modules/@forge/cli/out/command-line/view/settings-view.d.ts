import { UI } from '@forge/cli-shared';
declare type PreferenceValue = string | boolean | undefined;
export declare class SettingsView {
    private readonly ui;
    constructor(ui: UI);
    showSettings(preferences: [string, string, PreferenceValue][], json?: boolean): void;
    showAdditionalInfo(message: string): void;
    setSuccess(setting: string, value: string): void;
}
export {};
//# sourceMappingURL=settings-view.d.ts.map