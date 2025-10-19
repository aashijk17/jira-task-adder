import { FeedbackPostClient, CredentialGetter } from '@forge/cli-shared';
import { Response } from 'node-fetch';
export declare class FeedbackController {
    private readonly credentialStore;
    private readonly feedbackPostClient;
    constructor(credentialStore: CredentialGetter, feedbackPostClient: FeedbackPostClient);
    sendFeedback(feedback: string): Promise<Response>;
}
//# sourceMappingURL=feedback-controller.d.ts.map