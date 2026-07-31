import { ObjectCannedACL, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable } from '@nestjs/common';

import { UploadSignedUrl } from './types/UploadSignedUrl';

import { AppConfig } from '@core/AppConfig';

@Injectable()
export class StorageClient {
  private readonly s3Client: S3Client;

  private readonly supportedContentTypes = new Set(['image/jpeg', 'image/png']);

  public constructor(private readonly appConfig: AppConfig) {
    this.s3Client = new S3Client({
      endpoint: appConfig.storageEndpoint,
      region: appConfig.storageRegion,
      forcePathStyle: appConfig.storageForcePathStyle,
      credentials: {
        accessKeyId: appConfig.storageAccessKey,
        secretAccessKey: appConfig.storageSecretKey,
      },
    });
  }

  public async getUploadSignedUrl(fileKey: string, contentType: string): Promise<UploadSignedUrl> {
    const uploadUrl = await getSignedUrl(
      this.s3Client,
      new PutObjectCommand({
        Bucket: this.appConfig.storageBucket,
        Key: fileKey,
        ContentType: contentType,
        ACL: ObjectCannedACL.public_read,
      }),
      { expiresIn: 60 },
    );
    const path = new URL(uploadUrl).pathname.replace('/', '');
    return {
      uploadUrl,
      cdnUrl: `${this.appConfig.storageCdnUrl}/${path}`,
    };
  }
}
