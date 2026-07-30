import { Injectable } from '@nestjs/common';
import { JwtService as InternalJwtService } from '@nestjs/jwt';

import { JwtPayload } from '../types/JwtPayload';

@Injectable()
export class JwtService {
  public constructor(private readonly jwtService: InternalJwtService) {}

  public sign(accountAddress: string): Promise<string> {
    const payload: JwtPayload = { sub: accountAddress };
    return this.jwtService.signAsync(payload);
  }
}
