import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class ImageService {
  public async processTokenLogo(imageBuffer: Buffer): Promise<Buffer> {
    const metadata = await sharp(imageBuffer).metadata();
    const size = Math.min(metadata.width, metadata.height);
    return sharp(imageBuffer)
      .extract({
        left: Math.floor((metadata.width - size) / 2),
        top: Math.floor((metadata.height - size) / 2),
        width: size,
        height: size,
      })
      .resize(200, 200, {
        fit: 'inside',
      })
      .webp({ quality: 100 })
      .toBuffer();
  }
}
