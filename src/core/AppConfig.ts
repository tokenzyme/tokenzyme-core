export class AppConfig {
  public nodeEnv = this.getString('NODE_ENV', 'development');

  public logLevel = this.getString('LOG_LEVEL', 'info');

  public logPrisma = this.getBoolean('LOG_PRISMA', false);

  // Port the HTTP server binds to. Configurable because 3000 is a crowded
  // default — a second service on the same machine will collide with it.
  public port = this.getNumber('PORT', 3000);

  // Origin allowed by CORS, e.g. "https://example.com". Required in production.
  // Empty in development, where any origin is accepted.
  public corsOrigin = this.nodeEnv === 'production' ? this.getString('CORS_ORIGIN') : this.getString('CORS_ORIGIN', '');

  public priceFeedAddress = this.getString('PRICE_FEED_ADDRESS');

  public dbUrl = this.getString('DB_URL');

  public rpcUrl = this.getString('RPC_URL');

  public jwtSecret = this.getString('JWT_SECRET');

  // JWT lifetime in days.
  public jwtExpiresIn = this.getNumber('JWT_EXPIRES_IN');

  public storageBucket = this.getString('STORAGE_BUCKET');

  public storageRegion = this.getString('STORAGE_REGION');

  public storageEndpoint = this.getString('STORAGE_ENDPOINT');

  public storageCdnUrl = this.getString('STORAGE_CDN_URL');

  // Addressing style for the S3 API. AWS S3, Spaces and R2 serve virtual-hosted URLs
  // (bucket.host/key), which is the default. MinIO and most self-hosted gateways only
  // answer path-style (host/bucket/key) and need this turned on.
  public storageForcePathStyle = this.getBoolean('STORAGE_FORCE_PATH_STYLE', false);

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

  private getNumber(name: string, defaultValue?: number): number {
    const value = this.getProperty<number>(name, defaultValue);
    const parsed = Number(value);
    if (Number.isNaN(parsed)) {
      throw new Error(`Property "${name}" must be a number`);
    }
    return parsed;
  }

  private getProperty<T>(name: string, defaultValue?: T): string | T {
    const value = process.env[name];
    if (!value && defaultValue == null) {
      throw new Error(`Property "${name}" is required`);
    }
    return value ?? defaultValue ?? '';
  }
}
