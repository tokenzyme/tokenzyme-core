import { Args, Context, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { TokenSortType } from '../enums/TokenSortType';
import { TokenService } from '../services/TokenService';

import { SocialMediaObject } from './objects/SocialMediaObject';
import { TokenObject } from './objects/TokenObject';
import { TopHolderObject } from './objects/TopHolderObject';
import { UploadSignedUrlObject } from './objects/UploadSignedUrlObject';

import { UploadSignedUrl } from '@cloud/storage/types/UploadSignedUrl';
import { RequestContext } from '@core/graphql/RequestContext';

@Resolver(() => TokenObject)
export class TokenResolver {
  public constructor(private readonly tokenService: TokenService) {}

  @Query(() => UploadSignedUrlObject)
  public tokenLogoUploadUrl(): Promise<UploadSignedUrl> {
    return this.tokenService.getTokenLogoUploadUrl();
  }

  @Query(() => [TokenObject])
  public tokens(
    @Args('sortType', { type: () => TokenSortType }) sortType: TokenSortType,
    @Args('pageSize', { type: () => Int, nullable: true }) pageSize?: number | null,
    @Args('lastTokenAddress', { type: () => String, nullable: true })
    lastTokenAddress?: string | null,
  ): Promise<TokenObject[]> {
    return this.tokenService.listTokens({ sortType, pageSize, lastTokenAddress });
  }

  @Query(() => [TokenObject])
  public firstPromotedTokensOfMonth(): Promise<TokenObject[]> {
    return this.tokenService.listFirstPromotedTokensOfMonth();
  }

  @Query(() => Boolean)
  public isTokenRegistered(@Args('address') address: string): Promise<boolean> {
    return this.tokenService.isTokenRegistered(address);
  }

  @Query(() => TokenObject)
  public token(@Args('address') address: string): Promise<TokenObject> {
    return this.tokenService.getToken(address);
  }

  @Query(() => [TopHolderObject])
  public topHolders(@Args('tokenAddress') tokenAddress: string): Promise<TopHolderObject[]> {
    return this.tokenService.listTopHolders(tokenAddress);
  }

  @ResolveField(() => SocialMediaObject, { nullable: true })
  public socialMedia(
    @Parent() parent: TokenObject,
    @Context() context: RequestContext,
  ): Promise<SocialMediaObject | null> {
    return context.loaders.socialMedia.load(parent.address);
  }

  @ResolveField(() => Int)
  public tradesCount(@Parent() parent: TokenObject, @Context() context: RequestContext): Promise<number> {
    return context.loaders.tradesCount.load(parent.address);
  }

  @ResolveField(() => Int)
  public commentsCount(@Parent() parent: TokenObject, @Context() context: RequestContext): Promise<number> {
    return context.loaders.commentsCount.load(parent.address);
  }
}
