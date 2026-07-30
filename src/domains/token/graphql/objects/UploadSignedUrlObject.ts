import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('UploadSignedUrl')
export class UploadSignedUrlObject {
  @Field()
  public uploadUrl!: string;

  @Field()
  public cdnUrl!: string;
}
