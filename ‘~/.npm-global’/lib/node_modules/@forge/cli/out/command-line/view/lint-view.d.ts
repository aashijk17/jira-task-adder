import { UI } from '@forge/cli-shared';
import { LintFixState, LintLogger, LintResult } from '@forge/lint';
export declare class LintView {
    private readonly ui;
    private lintResultReporter;
    constructor(ui: UI, lintResultReporter?: (logger: LintLogger, lintResults: LintResult[], showSummary?: boolean | undefined) => void);
    reportLintResult(results: LintResult[]): void;
    reportFixResult(result: LintFixState): void;
    getLogger(): LintLogger;
    showBlurb(): void;
}
//# sourceMappingURL=lint-view.d.ts.map