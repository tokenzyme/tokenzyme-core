export class AppConfig {
  public nodeEnv = this.getString('NODE_ENV', 'development');

  public logLevel = this.getString('LOG_LEVEL', 'info');

  public logPrisma = this.getBoolean('LOG_PRISMA', false);

  // Origin allowed by CORS, e.g. "https://example.com". Required in production.
  // Empty in development, where any origin is accepted.
  public corsOrigin = this.nodeEnv === 'production' ? this.getString('CORS_ORIGIN') : this.getString('CORS_ORIGIN', '');

  public priceFeedAddress = this.getString('PRICE_FEED_ADDRESS');

  public dbUrl = this.getString('DB_URL');

  public rpcUrl = this.getString('RPC_URL');

  public jwtSecret = this.getString('JWT_SECRET');

  public jwtExpiresIn = this.getString('JWT_EXPIRES_IN');

  public storageBucket = this.getString('STORAGE_BUCKET');

  public storageRegion = this.getString('STORAGE_REGION');

  public storageEndpoint = this.getString('STORAGE_ENDPOINT');

  public storageCdnUrl = this.getString('STORAGE_CDN_URL');

  public storageAccessKey = this.getString('STORAGE_ACCESS_KEY');

  public storageSecretKey = this.getString('STORAGE_SECRET_KEY');

  public isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  public isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  private getString(name: string, defaultValue?: string): string {
    return this.getProperty<string>(name, defaultValue);
  }

  private getBoolean(name: string, defaultValue?: boolean): boolean {
    return this.getProperty<boolean>(name, defaultValue) === 'true';
  }

  private getProperty<T>(name: string, defaultValue?: T): string | T {
    const value = process.env[name];
    if (!value && defaultValue == null) {
      throw new Error(`Property "${name}" is required`);
    }
    return value ?? defaultValue ?? '';
  }
}
