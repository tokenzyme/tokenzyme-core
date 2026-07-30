import { Module } from '@nestjs/common';

import { CloudModule } from '@cloud/CloudModule';
import { CoreModule } from '@core/CoreModule';
import { DomainsModule } from '@domains/DomainsModule';

@Module({
  imports: [CloudModule, CoreModule, DomainsModule],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class MainModule {}
