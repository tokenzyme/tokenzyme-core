import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('SocialMedia')
export class SocialMediaObject {
  @Field(() => String, { nullable: true })
  public xUrl?: string | null;

  @Field(() => String, { nullable: true })
  public telegramUrl?: string | null;

  @Field(() => String, { nullable: true })
  public discordUrl?: string | null;

  @Field(() => String, { nullable: true })
  public redditUrl?: string | null;

  @Field(() => String, { nullable: true })
  public facebookUrl?: string | null;

  @Field(() => String, { nullable: true })
  public instagramUrl?: string | null;
}
