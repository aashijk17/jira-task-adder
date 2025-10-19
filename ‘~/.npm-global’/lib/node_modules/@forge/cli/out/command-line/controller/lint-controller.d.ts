import { LintService } from '../../service/lint-service';
import { LintView } from '../view/lint-view';
export declare class LintController {
    private readonly lintService;
    private readonly lintView;
    constructor(lintService: LintService, lintView: LintView);
    run(environment: string, fix: boolean): Promise<void>;
}
//# sourceMappingURL=lint-controller.d.ts.map