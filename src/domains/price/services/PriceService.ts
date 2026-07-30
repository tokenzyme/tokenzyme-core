import { Injectable } from '@nestjs/common';
import { JsonRpcProvider, formatUnits } from 'ethers';

import { AppConfig } from '@core/AppConfig';
import { AggregatorV3Interface__factory } from '@typechain';

@Injectable()
export class PriceService {
  private readonly provider: JsonRpcProvider;

  public constructor(private readonly appConfig: AppConfig) {
    this.provider = new JsonRpcProvider(appConfig.rpcUrl);
  }

  public async getEthPrice(): Promise<number> {
    const priceFeedContract = AggregatorV3Interface__factory.connect(this.appConfig.priceFeedAddress, this.provider);

    const [, price] = await priceFeedContract.latestRoundData();
    const decimals = await priceFeedContract.decimals();

    return Number(formatUnits(price, decimals));
  }
}
