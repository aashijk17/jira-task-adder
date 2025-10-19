import { UI } from '@forge/cli-shared';
import { LintLogger, LintResult } from '@forge/lint';
export declare class LiteLintView {
    private readonly ui;
    private reporter;
    constructor(ui: UI, reporter?: (logger: LintLogger, lintResults: LintResult[], showSummary?: boolean | undefined) => void);
    reportErrors(report: LintResult[]): void;
    getLogger(): LintLogger;
}
//# sourceMappingURL=lite-lint-view.d.ts.map