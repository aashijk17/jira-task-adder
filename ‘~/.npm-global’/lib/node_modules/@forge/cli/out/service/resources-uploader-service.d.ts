import { FileSystemReader, HostedResourcePreSignedUrl } from '@forge/cli-shared';
export interface UploaderService {
    upload(details: {
        archive: string;
        preSignedUrl: HostedResourcePreSignedUrl;
    }): Promise<void>;
}
export declare class ResourcesUploaderService implements UploaderService {
    private readonly fileSystemReader;
    constructor(fileSystemReader: FileSystemReader);
    upload({ archive, preSignedUrl }: {
        archive: string;
        preSignedUrl: HostedResourcePreSignedUrl;
    }): Promise<void>;
}
//# sourceMappingURL=resources-uploader-service.d.ts.map