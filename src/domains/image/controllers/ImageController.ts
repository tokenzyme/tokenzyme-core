import { BadRequestException, Controller, Post, Req, Res } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

import { ImageService } from '../services/ImageService';

@Controller('images')
export class ImageController {
  public constructor(private readonly imageService: ImageService) {}

  @Post('processTokenLogo')
  public async handleUpload(@Req() req: FastifyRequest, @Res() reply: FastifyReply): Promise<void> {
    const multiPartFile = await req.file();
    if (!multiPartFile?.file) {
      throw new BadRequestException('missing_token_logo');
    }

    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(multiPartFile.mimetype)) {
      throw new BadRequestException('unsupported_logo_image_type');
    }

    const buffer = await multiPartFile.toBuffer();
    const result = await this.imageService.processTokenLogo(buffer);

    await reply.header('Content-Type', 'image/webp').send(result);
  }
}
