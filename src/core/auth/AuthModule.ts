import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JwtService } from './services/JwtService';

import { AppConfig } from '@core/AppConfig';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (appConfig: AppConfig) => ({
        secret: appConfig.jwtSecret,
        signOptions: { expiresIn: appConfig.jwtExpiresIn * 24 * 60 * 60 },
      }),
      inject: [AppConfig],
    }),
  ],
  providers: [JwtService],
  exports: [JwtService, JwtModule],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthModule {}
