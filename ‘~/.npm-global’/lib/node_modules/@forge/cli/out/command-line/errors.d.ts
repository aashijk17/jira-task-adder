import { HiddenError } from '@forge/cli-shared';
export declare class DeferredErrors {
    private errors;
    constructor(errors: Error[]);
    getErrors(): Error[];
}
export declare class UserAbortError extends HiddenError {
    constructor();
    isUserError(): boolean;
}
//# sourceMappingURL=errors.d.ts.map