import { Module } from '@nestjs/common';

import { ImageController } from './controllers/ImageController';
import { ImageService } from './services/ImageService';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ImageModule {}
