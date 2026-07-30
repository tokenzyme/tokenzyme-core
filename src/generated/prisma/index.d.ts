
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model SignatureMessage
 * 
 */
export type SignatureMessage = $Result.DefaultSelection<Prisma.$SignatureMessagePayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model SocialMedia
 * 
 */
export type SocialMedia = $Result.DefaultSelection<Prisma.$SocialMediaPayload>
/**
 * Model DexLiquidity
 * 
 */
export type DexLiquidity = $Result.DefaultSelection<Prisma.$DexLiquidityPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SignatureMessageType: {
  SIGN_IN: 'SIGN_IN'
};

export type SignatureMessageType = (typeof SignatureMessageType)[keyof typeof SignatureMessageType]


export const TradeType: {
  BUY: 'BUY',
  SELL: 'SELL'
};

export type TradeType = (typeof TradeType)[keyof typeof TradeType]

}

export type SignatureMessageType = $Enums.SignatureMessageType

export const SignatureMessageType: typeof $Enums.SignatureMessageType

export type TradeType = $Enums.TradeType

export const TradeType: typeof $Enums.TradeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signatureMessage`: Exposes CRUD operations for the **SignatureMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SignatureMessages
    * const signatureMessages = await prisma.signatureMessage.findMany()
    * ```
    */
  get signatureMessage(): Prisma.SignatureMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialMedia`: Exposes CRUD operations for the **SocialMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialMedias
    * const socialMedias = await prisma.socialMedia.findMany()
    * ```
    */
  get socialMedia(): Prisma.SocialMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dexLiquidity`: Exposes CRUD operations for the **DexLiquidity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DexLiquidities
    * const dexLiquidities = await prisma.dexLiquidity.findMany()
    * ```
    */
  get dexLiquidity(): Prisma.DexLiquidityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Comment: 'Comment',
    SignatureMessage: 'SignatureMessage',
    Token: 'Token',
    SocialMedia: 'SocialMedia',
    DexLiquidity: 'DexLiquidity',
    Trade: 'Trade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "comment" | "signatureMessage" | "token" | "socialMedia" | "dexLiquidity" | "trade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      SignatureMessage: {
        payload: Prisma.$SignatureMessagePayload<ExtArgs>
        fields: Prisma.SignatureMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignatureMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignatureMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>
          }
          findFirst: {
            args: Prisma.SignatureMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignatureMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>
          }
          findMany: {
            args: Prisma.SignatureMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>[]
          }
          create: {
            args: Prisma.SignatureMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>
          }
          createMany: {
            args: Prisma.SignatureMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignatureMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>[]
          }
          delete: {
            args: Prisma.SignatureMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>
          }
          update: {
            args: Prisma.SignatureMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>
          }
          deleteMany: {
            args: Prisma.SignatureMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignatureMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignatureMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>[]
          }
          upsert: {
            args: Prisma.SignatureMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignatureMessagePayload>
          }
          aggregate: {
            args: Prisma.SignatureMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignatureMessage>
          }
          groupBy: {
            args: Prisma.SignatureMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignatureMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignatureMessageCountArgs<ExtArgs>
            result: $Utils.Optional<SignatureMessageCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      SocialMedia: {
        payload: Prisma.$SocialMediaPayload<ExtArgs>
        fields: Prisma.SocialMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          findFirst: {
            args: Prisma.SocialMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          findMany: {
            args: Prisma.SocialMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>[]
          }
          create: {
            args: Prisma.SocialMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          createMany: {
            args: Prisma.SocialMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>[]
          }
          delete: {
            args: Prisma.SocialMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          update: {
            args: Prisma.SocialMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          deleteMany: {
            args: Prisma.SocialMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>[]
          }
          upsert: {
            args: Prisma.SocialMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialMediaPayload>
          }
          aggregate: {
            args: Prisma.SocialMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialMedia>
          }
          groupBy: {
            args: Prisma.SocialMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialMediaCountArgs<ExtArgs>
            result: $Utils.Optional<SocialMediaCountAggregateOutputType> | number
          }
        }
      }
      DexLiquidity: {
        payload: Prisma.$DexLiquidityPayload<ExtArgs>
        fields: Prisma.DexLiquidityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DexLiquidityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DexLiquidityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>
          }
          findFirst: {
            args: Prisma.DexLiquidityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DexLiquidityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>
          }
          findMany: {
            args: Prisma.DexLiquidityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>[]
          }
          create: {
            args: Prisma.DexLiquidityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>
          }
          createMany: {
            args: Prisma.DexLiquidityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DexLiquidityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>[]
          }
          delete: {
            args: Prisma.DexLiquidityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>
          }
          update: {
            args: Prisma.DexLiquidityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>
          }
          deleteMany: {
            args: Prisma.DexLiquidityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DexLiquidityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DexLiquidityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>[]
          }
          upsert: {
            args: Prisma.DexLiquidityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DexLiquidityPayload>
          }
          aggregate: {
            args: Prisma.DexLiquidityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDexLiquidity>
          }
          groupBy: {
            args: Prisma.DexLiquidityGroupByArgs<ExtArgs>
            result: $Utils.Optional<DexLiquidityGroupByOutputType>[]
          }
          count: {
            args: Prisma.DexLiquidityCountArgs<ExtArgs>
            result: $Utils.Optional<DexLiquidityCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    comment?: CommentOmit
    signatureMessage?: SignatureMessageOmit
    token?: TokenOmit
    socialMedia?: SocialMediaOmit
    dexLiquidity?: DexLiquidityOmit
    trade?: TradeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    comments: number
    signatureMessages: number
    tokens: number
    trades: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | AccountCountOutputTypeCountCommentsArgs
    signatureMessages?: boolean | AccountCountOutputTypeCountSignatureMessagesArgs
    tokens?: boolean | AccountCountOutputTypeCountTokensArgs
    trades?: boolean | AccountCountOutputTypeCountTradesArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSignatureMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignatureMessageWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    comments: number
    dexLiquidities: number
    socialMedia: number
    trades: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | TokenCountOutputTypeCountCommentsArgs
    dexLiquidities?: boolean | TokenCountOutputTypeCountDexLiquiditiesArgs
    socialMedia?: boolean | TokenCountOutputTypeCountSocialMediaArgs
    trades?: boolean | TokenCountOutputTypeCountTradesArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountDexLiquiditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DexLiquidityWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountSocialMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    address: string
    createdAt: Date
    updatedAt: Date | null
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | Account$commentsArgs<ExtArgs>
    signatureMessages?: boolean | Account$signatureMessagesArgs<ExtArgs>
    tokens?: boolean | Account$tokensArgs<ExtArgs>
    trades?: boolean | Account$tradesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Account$commentsArgs<ExtArgs>
    signatureMessages?: boolean | Account$signatureMessagesArgs<ExtArgs>
    tokens?: boolean | Account$tokensArgs<ExtArgs>
    trades?: boolean | Account$tradesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      signatureMessages: Prisma.$SignatureMessagePayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      trades: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      address: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const accountWithAddressOnly = await prisma.account.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `address`
     * const accountWithAddressOnly = await prisma.account.createManyAndReturn({
     *   select: { address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `address`
     * const accountWithAddressOnly = await prisma.account.updateManyAndReturn({
     *   select: { address: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Account$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Account$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signatureMessages<T extends Account$signatureMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Account$signatureMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends Account$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Account$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trades<T extends Account$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Account$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly address: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.comments
   */
  export type Account$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Account.signatureMessages
   */
  export type Account$signatureMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    where?: SignatureMessageWhereInput
    orderBy?: SignatureMessageOrderByWithRelationInput | SignatureMessageOrderByWithRelationInput[]
    cursor?: SignatureMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignatureMessageScalarFieldEnum | SignatureMessageScalarFieldEnum[]
  }

  /**
   * Account.tokens
   */
  export type Account$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Account.trades
   */
  export type Account$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    tokenAddress: string | null
    accountAddress: string | null
    text: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    tokenAddress: string | null
    accountAddress: string | null
    text: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    tokenAddress: number
    accountAddress: number
    text: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    tokenAddress?: true
    accountAddress?: true
    text?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    tokenAddress?: true
    accountAddress?: true
    text?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    tokenAddress?: true
    accountAddress?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    tokenAddress: string
    accountAddress: string
    text: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    text?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    text?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    text?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenAddress" | "accountAddress" | "text" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tokenAddress: string
      accountAddress: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly tokenAddress: FieldRef<"Comment", 'String'>
    readonly accountAddress: FieldRef<"Comment", 'String'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model SignatureMessage
   */

  export type AggregateSignatureMessage = {
    _count: SignatureMessageCountAggregateOutputType | null
    _min: SignatureMessageMinAggregateOutputType | null
    _max: SignatureMessageMaxAggregateOutputType | null
  }

  export type SignatureMessageMinAggregateOutputType = {
    id: string | null
    accountAddress: string | null
    type: $Enums.SignatureMessageType | null
    message: string | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type SignatureMessageMaxAggregateOutputType = {
    id: string | null
    accountAddress: string | null
    type: $Enums.SignatureMessageType | null
    message: string | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type SignatureMessageCountAggregateOutputType = {
    id: number
    accountAddress: number
    type: number
    message: number
    createdAt: number
    expiredAt: number
    _all: number
  }


  export type SignatureMessageMinAggregateInputType = {
    id?: true
    accountAddress?: true
    type?: true
    message?: true
    createdAt?: true
    expiredAt?: true
  }

  export type SignatureMessageMaxAggregateInputType = {
    id?: true
    accountAddress?: true
    type?: true
    message?: true
    createdAt?: true
    expiredAt?: true
  }

  export type SignatureMessageCountAggregateInputType = {
    id?: true
    accountAddress?: true
    type?: true
    message?: true
    createdAt?: true
    expiredAt?: true
    _all?: true
  }

  export type SignatureMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignatureMessage to aggregate.
     */
    where?: SignatureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatureMessages to fetch.
     */
    orderBy?: SignatureMessageOrderByWithRelationInput | SignatureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignatureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatureMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SignatureMessages
    **/
    _count?: true | SignatureMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignatureMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignatureMessageMaxAggregateInputType
  }

  export type GetSignatureMessageAggregateType<T extends SignatureMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateSignatureMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignatureMessage[P]>
      : GetScalarType<T[P], AggregateSignatureMessage[P]>
  }




  export type SignatureMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignatureMessageWhereInput
    orderBy?: SignatureMessageOrderByWithAggregationInput | SignatureMessageOrderByWithAggregationInput[]
    by: SignatureMessageScalarFieldEnum[] | SignatureMessageScalarFieldEnum
    having?: SignatureMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignatureMessageCountAggregateInputType | true
    _min?: SignatureMessageMinAggregateInputType
    _max?: SignatureMessageMaxAggregateInputType
  }

  export type SignatureMessageGroupByOutputType = {
    id: string
    accountAddress: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt: Date
    expiredAt: Date
    _count: SignatureMessageCountAggregateOutputType | null
    _min: SignatureMessageMinAggregateOutputType | null
    _max: SignatureMessageMaxAggregateOutputType | null
  }

  type GetSignatureMessageGroupByPayload<T extends SignatureMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignatureMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignatureMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignatureMessageGroupByOutputType[P]>
            : GetScalarType<T[P], SignatureMessageGroupByOutputType[P]>
        }
      >
    >


  export type SignatureMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountAddress?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatureMessage"]>

  export type SignatureMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountAddress?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatureMessage"]>

  export type SignatureMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountAddress?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signatureMessage"]>

  export type SignatureMessageSelectScalar = {
    id?: boolean
    accountAddress?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    expiredAt?: boolean
  }

  export type SignatureMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountAddress" | "type" | "message" | "createdAt" | "expiredAt", ExtArgs["result"]["signatureMessage"]>
  export type SignatureMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type SignatureMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type SignatureMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $SignatureMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SignatureMessage"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountAddress: string
      type: $Enums.SignatureMessageType
      message: string
      createdAt: Date
      expiredAt: Date
    }, ExtArgs["result"]["signatureMessage"]>
    composites: {}
  }

  type SignatureMessageGetPayload<S extends boolean | null | undefined | SignatureMessageDefaultArgs> = $Result.GetResult<Prisma.$SignatureMessagePayload, S>

  type SignatureMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignatureMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SignatureMessageCountAggregateInputType | true
    }

  export interface SignatureMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SignatureMessage'], meta: { name: 'SignatureMessage' } }
    /**
     * Find zero or one SignatureMessage that matches the filter.
     * @param {SignatureMessageFindUniqueArgs} args - Arguments to find a SignatureMessage
     * @example
     * // Get one SignatureMessage
     * const signatureMessage = await prisma.signatureMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignatureMessageFindUniqueArgs>(args: SelectSubset<T, SignatureMessageFindUniqueArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SignatureMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignatureMessageFindUniqueOrThrowArgs} args - Arguments to find a SignatureMessage
     * @example
     * // Get one SignatureMessage
     * const signatureMessage = await prisma.signatureMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignatureMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, SignatureMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignatureMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageFindFirstArgs} args - Arguments to find a SignatureMessage
     * @example
     * // Get one SignatureMessage
     * const signatureMessage = await prisma.signatureMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignatureMessageFindFirstArgs>(args?: SelectSubset<T, SignatureMessageFindFirstArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SignatureMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageFindFirstOrThrowArgs} args - Arguments to find a SignatureMessage
     * @example
     * // Get one SignatureMessage
     * const signatureMessage = await prisma.signatureMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignatureMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, SignatureMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SignatureMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SignatureMessages
     * const signatureMessages = await prisma.signatureMessage.findMany()
     * 
     * // Get first 10 SignatureMessages
     * const signatureMessages = await prisma.signatureMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signatureMessageWithIdOnly = await prisma.signatureMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignatureMessageFindManyArgs>(args?: SelectSubset<T, SignatureMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SignatureMessage.
     * @param {SignatureMessageCreateArgs} args - Arguments to create a SignatureMessage.
     * @example
     * // Create one SignatureMessage
     * const SignatureMessage = await prisma.signatureMessage.create({
     *   data: {
     *     // ... data to create a SignatureMessage
     *   }
     * })
     * 
     */
    create<T extends SignatureMessageCreateArgs>(args: SelectSubset<T, SignatureMessageCreateArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SignatureMessages.
     * @param {SignatureMessageCreateManyArgs} args - Arguments to create many SignatureMessages.
     * @example
     * // Create many SignatureMessages
     * const signatureMessage = await prisma.signatureMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignatureMessageCreateManyArgs>(args?: SelectSubset<T, SignatureMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SignatureMessages and returns the data saved in the database.
     * @param {SignatureMessageCreateManyAndReturnArgs} args - Arguments to create many SignatureMessages.
     * @example
     * // Create many SignatureMessages
     * const signatureMessage = await prisma.signatureMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SignatureMessages and only return the `id`
     * const signatureMessageWithIdOnly = await prisma.signatureMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignatureMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, SignatureMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SignatureMessage.
     * @param {SignatureMessageDeleteArgs} args - Arguments to delete one SignatureMessage.
     * @example
     * // Delete one SignatureMessage
     * const SignatureMessage = await prisma.signatureMessage.delete({
     *   where: {
     *     // ... filter to delete one SignatureMessage
     *   }
     * })
     * 
     */
    delete<T extends SignatureMessageDeleteArgs>(args: SelectSubset<T, SignatureMessageDeleteArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SignatureMessage.
     * @param {SignatureMessageUpdateArgs} args - Arguments to update one SignatureMessage.
     * @example
     * // Update one SignatureMessage
     * const signatureMessage = await prisma.signatureMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignatureMessageUpdateArgs>(args: SelectSubset<T, SignatureMessageUpdateArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SignatureMessages.
     * @param {SignatureMessageDeleteManyArgs} args - Arguments to filter SignatureMessages to delete.
     * @example
     * // Delete a few SignatureMessages
     * const { count } = await prisma.signatureMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignatureMessageDeleteManyArgs>(args?: SelectSubset<T, SignatureMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignatureMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SignatureMessages
     * const signatureMessage = await prisma.signatureMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignatureMessageUpdateManyArgs>(args: SelectSubset<T, SignatureMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SignatureMessages and returns the data updated in the database.
     * @param {SignatureMessageUpdateManyAndReturnArgs} args - Arguments to update many SignatureMessages.
     * @example
     * // Update many SignatureMessages
     * const signatureMessage = await prisma.signatureMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SignatureMessages and only return the `id`
     * const signatureMessageWithIdOnly = await prisma.signatureMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignatureMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, SignatureMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SignatureMessage.
     * @param {SignatureMessageUpsertArgs} args - Arguments to update or create a SignatureMessage.
     * @example
     * // Update or create a SignatureMessage
     * const signatureMessage = await prisma.signatureMessage.upsert({
     *   create: {
     *     // ... data to create a SignatureMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SignatureMessage we want to update
     *   }
     * })
     */
    upsert<T extends SignatureMessageUpsertArgs>(args: SelectSubset<T, SignatureMessageUpsertArgs<ExtArgs>>): Prisma__SignatureMessageClient<$Result.GetResult<Prisma.$SignatureMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SignatureMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageCountArgs} args - Arguments to filter SignatureMessages to count.
     * @example
     * // Count the number of SignatureMessages
     * const count = await prisma.signatureMessage.count({
     *   where: {
     *     // ... the filter for the SignatureMessages we want to count
     *   }
     * })
    **/
    count<T extends SignatureMessageCountArgs>(
      args?: Subset<T, SignatureMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignatureMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SignatureMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignatureMessageAggregateArgs>(args: Subset<T, SignatureMessageAggregateArgs>): Prisma.PrismaPromise<GetSignatureMessageAggregateType<T>>

    /**
     * Group by SignatureMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignatureMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignatureMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignatureMessageGroupByArgs['orderBy'] }
        : { orderBy?: SignatureMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignatureMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignatureMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SignatureMessage model
   */
  readonly fields: SignatureMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SignatureMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignatureMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SignatureMessage model
   */
  interface SignatureMessageFieldRefs {
    readonly id: FieldRef<"SignatureMessage", 'String'>
    readonly accountAddress: FieldRef<"SignatureMessage", 'String'>
    readonly type: FieldRef<"SignatureMessage", 'SignatureMessageType'>
    readonly message: FieldRef<"SignatureMessage", 'String'>
    readonly createdAt: FieldRef<"SignatureMessage", 'DateTime'>
    readonly expiredAt: FieldRef<"SignatureMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SignatureMessage findUnique
   */
  export type SignatureMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * Filter, which SignatureMessage to fetch.
     */
    where: SignatureMessageWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage findUniqueOrThrow
   */
  export type SignatureMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * Filter, which SignatureMessage to fetch.
     */
    where: SignatureMessageWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage findFirst
   */
  export type SignatureMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * Filter, which SignatureMessage to fetch.
     */
    where?: SignatureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatureMessages to fetch.
     */
    orderBy?: SignatureMessageOrderByWithRelationInput | SignatureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignatureMessages.
     */
    cursor?: SignatureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatureMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignatureMessages.
     */
    distinct?: SignatureMessageScalarFieldEnum | SignatureMessageScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage findFirstOrThrow
   */
  export type SignatureMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * Filter, which SignatureMessage to fetch.
     */
    where?: SignatureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatureMessages to fetch.
     */
    orderBy?: SignatureMessageOrderByWithRelationInput | SignatureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SignatureMessages.
     */
    cursor?: SignatureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatureMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SignatureMessages.
     */
    distinct?: SignatureMessageScalarFieldEnum | SignatureMessageScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage findMany
   */
  export type SignatureMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * Filter, which SignatureMessages to fetch.
     */
    where?: SignatureMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SignatureMessages to fetch.
     */
    orderBy?: SignatureMessageOrderByWithRelationInput | SignatureMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SignatureMessages.
     */
    cursor?: SignatureMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SignatureMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SignatureMessages.
     */
    skip?: number
    distinct?: SignatureMessageScalarFieldEnum | SignatureMessageScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage create
   */
  export type SignatureMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a SignatureMessage.
     */
    data: XOR<SignatureMessageCreateInput, SignatureMessageUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage createMany
   */
  export type SignatureMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SignatureMessages.
     */
    data: SignatureMessageCreateManyInput | SignatureMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SignatureMessage createManyAndReturn
   */
  export type SignatureMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * The data used to create many SignatureMessages.
     */
    data: SignatureMessageCreateManyInput | SignatureMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SignatureMessage update
   */
  export type SignatureMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a SignatureMessage.
     */
    data: XOR<SignatureMessageUpdateInput, SignatureMessageUncheckedUpdateInput>
    /**
     * Choose, which SignatureMessage to update.
     */
    where: SignatureMessageWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage updateMany
   */
  export type SignatureMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SignatureMessages.
     */
    data: XOR<SignatureMessageUpdateManyMutationInput, SignatureMessageUncheckedUpdateManyInput>
    /**
     * Filter which SignatureMessages to update
     */
    where?: SignatureMessageWhereInput
    /**
     * Limit how many SignatureMessages to update.
     */
    limit?: number
  }

  /**
   * SignatureMessage updateManyAndReturn
   */
  export type SignatureMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * The data used to update SignatureMessages.
     */
    data: XOR<SignatureMessageUpdateManyMutationInput, SignatureMessageUncheckedUpdateManyInput>
    /**
     * Filter which SignatureMessages to update
     */
    where?: SignatureMessageWhereInput
    /**
     * Limit how many SignatureMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SignatureMessage upsert
   */
  export type SignatureMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the SignatureMessage to update in case it exists.
     */
    where: SignatureMessageWhereUniqueInput
    /**
     * In case the SignatureMessage found by the `where` argument doesn't exist, create a new SignatureMessage with this data.
     */
    create: XOR<SignatureMessageCreateInput, SignatureMessageUncheckedCreateInput>
    /**
     * In case the SignatureMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignatureMessageUpdateInput, SignatureMessageUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage delete
   */
  export type SignatureMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
    /**
     * Filter which SignatureMessage to delete.
     */
    where: SignatureMessageWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SignatureMessage deleteMany
   */
  export type SignatureMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SignatureMessages to delete
     */
    where?: SignatureMessageWhereInput
    /**
     * Limit how many SignatureMessages to delete.
     */
    limit?: number
  }

  /**
   * SignatureMessage without action
   */
  export type SignatureMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignatureMessage
     */
    select?: SignatureMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SignatureMessage
     */
    omit?: SignatureMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignatureMessageInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    totalSupply: Decimal | null
    bondingCurveSupply: Decimal | null
    ethReserve: Decimal | null
    reserve: Decimal | null
    price: Decimal | null
    finalPrice: Decimal | null
  }

  export type TokenSumAggregateOutputType = {
    totalSupply: Decimal | null
    bondingCurveSupply: Decimal | null
    ethReserve: Decimal | null
    reserve: Decimal | null
    price: Decimal | null
    finalPrice: Decimal | null
  }

  export type TokenMinAggregateOutputType = {
    address: string | null
    creatorAddress: string | null
    name: string | null
    symbol: string | null
    description: string | null
    logoUrl: string | null
    websiteUrl: string | null
    totalSupply: Decimal | null
    bondingCurveSupply: Decimal | null
    ethReserve: Decimal | null
    reserve: Decimal | null
    price: Decimal | null
    finalPrice: Decimal | null
    dexPoolAddress: string | null
    migratedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    address: string | null
    creatorAddress: string | null
    name: string | null
    symbol: string | null
    description: string | null
    logoUrl: string | null
    websiteUrl: string | null
    totalSupply: Decimal | null
    bondingCurveSupply: Decimal | null
    ethReserve: Decimal | null
    reserve: Decimal | null
    price: Decimal | null
    finalPrice: Decimal | null
    dexPoolAddress: string | null
    migratedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    address: number
    creatorAddress: number
    name: number
    symbol: number
    description: number
    logoUrl: number
    websiteUrl: number
    totalSupply: number
    bondingCurveSupply: number
    ethReserve: number
    reserve: number
    price: number
    finalPrice: number
    dexPoolAddress: number
    migratedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    totalSupply?: true
    bondingCurveSupply?: true
    ethReserve?: true
    reserve?: true
    price?: true
    finalPrice?: true
  }

  export type TokenSumAggregateInputType = {
    totalSupply?: true
    bondingCurveSupply?: true
    ethReserve?: true
    reserve?: true
    price?: true
    finalPrice?: true
  }

  export type TokenMinAggregateInputType = {
    address?: true
    creatorAddress?: true
    name?: true
    symbol?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    totalSupply?: true
    bondingCurveSupply?: true
    ethReserve?: true
    reserve?: true
    price?: true
    finalPrice?: true
    dexPoolAddress?: true
    migratedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    address?: true
    creatorAddress?: true
    name?: true
    symbol?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    totalSupply?: true
    bondingCurveSupply?: true
    ethReserve?: true
    reserve?: true
    price?: true
    finalPrice?: true
    dexPoolAddress?: true
    migratedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    address?: true
    creatorAddress?: true
    name?: true
    symbol?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    totalSupply?: true
    bondingCurveSupply?: true
    ethReserve?: true
    reserve?: true
    price?: true
    finalPrice?: true
    dexPoolAddress?: true
    migratedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl: string | null
    totalSupply: Decimal
    bondingCurveSupply: Decimal
    ethReserve: Decimal
    reserve: Decimal
    price: Decimal
    finalPrice: Decimal
    dexPoolAddress: string | null
    migratedAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    creatorAddress?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    totalSupply?: boolean
    bondingCurveSupply?: boolean
    ethReserve?: boolean
    reserve?: boolean
    price?: boolean
    finalPrice?: boolean
    dexPoolAddress?: boolean
    migratedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | AccountDefaultArgs<ExtArgs>
    comments?: boolean | Token$commentsArgs<ExtArgs>
    dexLiquidities?: boolean | Token$dexLiquiditiesArgs<ExtArgs>
    socialMedia?: boolean | Token$socialMediaArgs<ExtArgs>
    trades?: boolean | Token$tradesArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    creatorAddress?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    totalSupply?: boolean
    bondingCurveSupply?: boolean
    ethReserve?: boolean
    reserve?: boolean
    price?: boolean
    finalPrice?: boolean
    dexPoolAddress?: boolean
    migratedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    address?: boolean
    creatorAddress?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    totalSupply?: boolean
    bondingCurveSupply?: boolean
    ethReserve?: boolean
    reserve?: boolean
    price?: boolean
    finalPrice?: boolean
    dexPoolAddress?: boolean
    migratedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    address?: boolean
    creatorAddress?: boolean
    name?: boolean
    symbol?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    totalSupply?: boolean
    bondingCurveSupply?: boolean
    ethReserve?: boolean
    reserve?: boolean
    price?: boolean
    finalPrice?: boolean
    dexPoolAddress?: boolean
    migratedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"address" | "creatorAddress" | "name" | "symbol" | "description" | "logoUrl" | "websiteUrl" | "totalSupply" | "bondingCurveSupply" | "ethReserve" | "reserve" | "price" | "finalPrice" | "dexPoolAddress" | "migratedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | AccountDefaultArgs<ExtArgs>
    comments?: boolean | Token$commentsArgs<ExtArgs>
    dexLiquidities?: boolean | Token$dexLiquiditiesArgs<ExtArgs>
    socialMedia?: boolean | Token$socialMediaArgs<ExtArgs>
    trades?: boolean | Token$tradesArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      creator: Prisma.$AccountPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      dexLiquidities: Prisma.$DexLiquidityPayload<ExtArgs>[]
      socialMedia: Prisma.$SocialMediaPayload<ExtArgs>[]
      trades: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      address: string
      creatorAddress: string
      name: string
      symbol: string
      description: string
      logoUrl: string
      websiteUrl: string | null
      totalSupply: Prisma.Decimal
      bondingCurveSupply: Prisma.Decimal
      ethReserve: Prisma.Decimal
      reserve: Prisma.Decimal
      price: Prisma.Decimal
      finalPrice: Prisma.Decimal
      dexPoolAddress: string | null
      migratedAt: Date | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `address`
     * const tokenWithAddressOnly = await prisma.token.findMany({ select: { address: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `address`
     * const tokenWithAddressOnly = await prisma.token.createManyAndReturn({
     *   select: { address: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `address`
     * const tokenWithAddressOnly = await prisma.token.updateManyAndReturn({
     *   select: { address: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Token$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Token$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dexLiquidities<T extends Token$dexLiquiditiesArgs<ExtArgs> = {}>(args?: Subset<T, Token$dexLiquiditiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialMedia<T extends Token$socialMediaArgs<ExtArgs> = {}>(args?: Subset<T, Token$socialMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trades<T extends Token$tradesArgs<ExtArgs> = {}>(args?: Subset<T, Token$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly address: FieldRef<"Token", 'String'>
    readonly creatorAddress: FieldRef<"Token", 'String'>
    readonly name: FieldRef<"Token", 'String'>
    readonly symbol: FieldRef<"Token", 'String'>
    readonly description: FieldRef<"Token", 'String'>
    readonly logoUrl: FieldRef<"Token", 'String'>
    readonly websiteUrl: FieldRef<"Token", 'String'>
    readonly totalSupply: FieldRef<"Token", 'Decimal'>
    readonly bondingCurveSupply: FieldRef<"Token", 'Decimal'>
    readonly ethReserve: FieldRef<"Token", 'Decimal'>
    readonly reserve: FieldRef<"Token", 'Decimal'>
    readonly price: FieldRef<"Token", 'Decimal'>
    readonly finalPrice: FieldRef<"Token", 'Decimal'>
    readonly dexPoolAddress: FieldRef<"Token", 'String'>
    readonly migratedAt: FieldRef<"Token", 'DateTime'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.comments
   */
  export type Token$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Token.dexLiquidities
   */
  export type Token$dexLiquiditiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    where?: DexLiquidityWhereInput
    orderBy?: DexLiquidityOrderByWithRelationInput | DexLiquidityOrderByWithRelationInput[]
    cursor?: DexLiquidityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DexLiquidityScalarFieldEnum | DexLiquidityScalarFieldEnum[]
  }

  /**
   * Token.socialMedia
   */
  export type Token$socialMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    where?: SocialMediaWhereInput
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    cursor?: SocialMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
  }

  /**
   * Token.trades
   */
  export type Token$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model SocialMedia
   */

  export type AggregateSocialMedia = {
    _count: SocialMediaCountAggregateOutputType | null
    _min: SocialMediaMinAggregateOutputType | null
    _max: SocialMediaMaxAggregateOutputType | null
  }

  export type SocialMediaMinAggregateOutputType = {
    tokenAddress: string | null
    telegramUrl: string | null
    discordUrl: string | null
    xUrl: string | null
    facebookUrl: string | null
    instagramUrl: string | null
    redditUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialMediaMaxAggregateOutputType = {
    tokenAddress: string | null
    telegramUrl: string | null
    discordUrl: string | null
    xUrl: string | null
    facebookUrl: string | null
    instagramUrl: string | null
    redditUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialMediaCountAggregateOutputType = {
    tokenAddress: number
    telegramUrl: number
    discordUrl: number
    xUrl: number
    facebookUrl: number
    instagramUrl: number
    redditUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialMediaMinAggregateInputType = {
    tokenAddress?: true
    telegramUrl?: true
    discordUrl?: true
    xUrl?: true
    facebookUrl?: true
    instagramUrl?: true
    redditUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialMediaMaxAggregateInputType = {
    tokenAddress?: true
    telegramUrl?: true
    discordUrl?: true
    xUrl?: true
    facebookUrl?: true
    instagramUrl?: true
    redditUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialMediaCountAggregateInputType = {
    tokenAddress?: true
    telegramUrl?: true
    discordUrl?: true
    xUrl?: true
    facebookUrl?: true
    instagramUrl?: true
    redditUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMedia to aggregate.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialMedias
    **/
    _count?: true | SocialMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMediaMaxAggregateInputType
  }

  export type GetSocialMediaAggregateType<T extends SocialMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialMedia[P]>
      : GetScalarType<T[P], AggregateSocialMedia[P]>
  }




  export type SocialMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialMediaWhereInput
    orderBy?: SocialMediaOrderByWithAggregationInput | SocialMediaOrderByWithAggregationInput[]
    by: SocialMediaScalarFieldEnum[] | SocialMediaScalarFieldEnum
    having?: SocialMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialMediaCountAggregateInputType | true
    _min?: SocialMediaMinAggregateInputType
    _max?: SocialMediaMaxAggregateInputType
  }

  export type SocialMediaGroupByOutputType = {
    tokenAddress: string
    telegramUrl: string | null
    discordUrl: string | null
    xUrl: string | null
    facebookUrl: string | null
    instagramUrl: string | null
    redditUrl: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: SocialMediaCountAggregateOutputType | null
    _min: SocialMediaMinAggregateOutputType | null
    _max: SocialMediaMaxAggregateOutputType | null
  }

  type GetSocialMediaGroupByPayload<T extends SocialMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialMediaGroupByOutputType[P]>
            : GetScalarType<T[P], SocialMediaGroupByOutputType[P]>
        }
      >
    >


  export type SocialMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    telegramUrl?: boolean
    discordUrl?: boolean
    xUrl?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    redditUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMedia"]>

  export type SocialMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    telegramUrl?: boolean
    discordUrl?: boolean
    xUrl?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    redditUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMedia"]>

  export type SocialMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    telegramUrl?: boolean
    discordUrl?: boolean
    xUrl?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    redditUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialMedia"]>

  export type SocialMediaSelectScalar = {
    tokenAddress?: boolean
    telegramUrl?: boolean
    discordUrl?: boolean
    xUrl?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    redditUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenAddress" | "telegramUrl" | "discordUrl" | "xUrl" | "facebookUrl" | "instagramUrl" | "redditUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["socialMedia"]>
  export type SocialMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type SocialMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type SocialMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $SocialMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialMedia"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenAddress: string
      telegramUrl: string | null
      discordUrl: string | null
      xUrl: string | null
      facebookUrl: string | null
      instagramUrl: string | null
      redditUrl: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["socialMedia"]>
    composites: {}
  }

  type SocialMediaGetPayload<S extends boolean | null | undefined | SocialMediaDefaultArgs> = $Result.GetResult<Prisma.$SocialMediaPayload, S>

  type SocialMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: SocialMediaCountAggregateInputType | true
    }

  export interface SocialMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialMedia'], meta: { name: 'SocialMedia' } }
    /**
     * Find zero or one SocialMedia that matches the filter.
     * @param {SocialMediaFindUniqueArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialMediaFindUniqueArgs>(args: SelectSubset<T, SocialMediaFindUniqueArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialMediaFindUniqueOrThrowArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaFindFirstArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialMediaFindFirstArgs>(args?: SelectSubset<T, SocialMediaFindFirstArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaFindFirstOrThrowArgs} args - Arguments to find a SocialMedia
     * @example
     * // Get one SocialMedia
     * const socialMedia = await prisma.socialMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialMedias
     * const socialMedias = await prisma.socialMedia.findMany()
     * 
     * // Get first 10 SocialMedias
     * const socialMedias = await prisma.socialMedia.findMany({ take: 10 })
     * 
     * // Only select the `tokenAddress`
     * const socialMediaWithTokenAddressOnly = await prisma.socialMedia.findMany({ select: { tokenAddress: true } })
     * 
     */
    findMany<T extends SocialMediaFindManyArgs>(args?: SelectSubset<T, SocialMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialMedia.
     * @param {SocialMediaCreateArgs} args - Arguments to create a SocialMedia.
     * @example
     * // Create one SocialMedia
     * const SocialMedia = await prisma.socialMedia.create({
     *   data: {
     *     // ... data to create a SocialMedia
     *   }
     * })
     * 
     */
    create<T extends SocialMediaCreateArgs>(args: SelectSubset<T, SocialMediaCreateArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialMedias.
     * @param {SocialMediaCreateManyArgs} args - Arguments to create many SocialMedias.
     * @example
     * // Create many SocialMedias
     * const socialMedia = await prisma.socialMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialMediaCreateManyArgs>(args?: SelectSubset<T, SocialMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialMedias and returns the data saved in the database.
     * @param {SocialMediaCreateManyAndReturnArgs} args - Arguments to create many SocialMedias.
     * @example
     * // Create many SocialMedias
     * const socialMedia = await prisma.socialMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialMedias and only return the `tokenAddress`
     * const socialMediaWithTokenAddressOnly = await prisma.socialMedia.createManyAndReturn({
     *   select: { tokenAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialMedia.
     * @param {SocialMediaDeleteArgs} args - Arguments to delete one SocialMedia.
     * @example
     * // Delete one SocialMedia
     * const SocialMedia = await prisma.socialMedia.delete({
     *   where: {
     *     // ... filter to delete one SocialMedia
     *   }
     * })
     * 
     */
    delete<T extends SocialMediaDeleteArgs>(args: SelectSubset<T, SocialMediaDeleteArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialMedia.
     * @param {SocialMediaUpdateArgs} args - Arguments to update one SocialMedia.
     * @example
     * // Update one SocialMedia
     * const socialMedia = await prisma.socialMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialMediaUpdateArgs>(args: SelectSubset<T, SocialMediaUpdateArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialMedias.
     * @param {SocialMediaDeleteManyArgs} args - Arguments to filter SocialMedias to delete.
     * @example
     * // Delete a few SocialMedias
     * const { count } = await prisma.socialMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialMediaDeleteManyArgs>(args?: SelectSubset<T, SocialMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialMedias
     * const socialMedia = await prisma.socialMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialMediaUpdateManyArgs>(args: SelectSubset<T, SocialMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialMedias and returns the data updated in the database.
     * @param {SocialMediaUpdateManyAndReturnArgs} args - Arguments to update many SocialMedias.
     * @example
     * // Update many SocialMedias
     * const socialMedia = await prisma.socialMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialMedias and only return the `tokenAddress`
     * const socialMediaWithTokenAddressOnly = await prisma.socialMedia.updateManyAndReturn({
     *   select: { tokenAddress: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialMedia.
     * @param {SocialMediaUpsertArgs} args - Arguments to update or create a SocialMedia.
     * @example
     * // Update or create a SocialMedia
     * const socialMedia = await prisma.socialMedia.upsert({
     *   create: {
     *     // ... data to create a SocialMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialMedia we want to update
     *   }
     * })
     */
    upsert<T extends SocialMediaUpsertArgs>(args: SelectSubset<T, SocialMediaUpsertArgs<ExtArgs>>): Prisma__SocialMediaClient<$Result.GetResult<Prisma.$SocialMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaCountArgs} args - Arguments to filter SocialMedias to count.
     * @example
     * // Count the number of SocialMedias
     * const count = await prisma.socialMedia.count({
     *   where: {
     *     // ... the filter for the SocialMedias we want to count
     *   }
     * })
    **/
    count<T extends SocialMediaCountArgs>(
      args?: Subset<T, SocialMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialMediaAggregateArgs>(args: Subset<T, SocialMediaAggregateArgs>): Prisma.PrismaPromise<GetSocialMediaAggregateType<T>>

    /**
     * Group by SocialMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialMediaGroupByArgs['orderBy'] }
        : { orderBy?: SocialMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialMedia model
   */
  readonly fields: SocialMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialMedia model
   */
  interface SocialMediaFieldRefs {
    readonly tokenAddress: FieldRef<"SocialMedia", 'String'>
    readonly telegramUrl: FieldRef<"SocialMedia", 'String'>
    readonly discordUrl: FieldRef<"SocialMedia", 'String'>
    readonly xUrl: FieldRef<"SocialMedia", 'String'>
    readonly facebookUrl: FieldRef<"SocialMedia", 'String'>
    readonly instagramUrl: FieldRef<"SocialMedia", 'String'>
    readonly redditUrl: FieldRef<"SocialMedia", 'String'>
    readonly createdAt: FieldRef<"SocialMedia", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialMedia findUnique
   */
  export type SocialMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where: SocialMediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia findUniqueOrThrow
   */
  export type SocialMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where: SocialMediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia findFirst
   */
  export type SocialMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMedias.
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMedias.
     */
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia findFirstOrThrow
   */
  export type SocialMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which SocialMedia to fetch.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialMedias.
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialMedias.
     */
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia findMany
   */
  export type SocialMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * Filter, which SocialMedias to fetch.
     */
    where?: SocialMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialMedias to fetch.
     */
    orderBy?: SocialMediaOrderByWithRelationInput | SocialMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialMedias.
     */
    cursor?: SocialMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialMedias.
     */
    skip?: number
    distinct?: SocialMediaScalarFieldEnum | SocialMediaScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia create
   */
  export type SocialMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialMedia.
     */
    data: XOR<SocialMediaCreateInput, SocialMediaUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia createMany
   */
  export type SocialMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialMedias.
     */
    data: SocialMediaCreateManyInput | SocialMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialMedia createManyAndReturn
   */
  export type SocialMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The data used to create many SocialMedias.
     */
    data: SocialMediaCreateManyInput | SocialMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialMedia update
   */
  export type SocialMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialMedia.
     */
    data: XOR<SocialMediaUpdateInput, SocialMediaUncheckedUpdateInput>
    /**
     * Choose, which SocialMedia to update.
     */
    where: SocialMediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia updateMany
   */
  export type SocialMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialMedias.
     */
    data: XOR<SocialMediaUpdateManyMutationInput, SocialMediaUncheckedUpdateManyInput>
    /**
     * Filter which SocialMedias to update
     */
    where?: SocialMediaWhereInput
    /**
     * Limit how many SocialMedias to update.
     */
    limit?: number
  }

  /**
   * SocialMedia updateManyAndReturn
   */
  export type SocialMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * The data used to update SocialMedias.
     */
    data: XOR<SocialMediaUpdateManyMutationInput, SocialMediaUncheckedUpdateManyInput>
    /**
     * Filter which SocialMedias to update
     */
    where?: SocialMediaWhereInput
    /**
     * Limit how many SocialMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialMedia upsert
   */
  export type SocialMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialMedia to update in case it exists.
     */
    where: SocialMediaWhereUniqueInput
    /**
     * In case the SocialMedia found by the `where` argument doesn't exist, create a new SocialMedia with this data.
     */
    create: XOR<SocialMediaCreateInput, SocialMediaUncheckedCreateInput>
    /**
     * In case the SocialMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialMediaUpdateInput, SocialMediaUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia delete
   */
  export type SocialMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
    /**
     * Filter which SocialMedia to delete.
     */
    where: SocialMediaWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * SocialMedia deleteMany
   */
  export type SocialMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialMedias to delete
     */
    where?: SocialMediaWhereInput
    /**
     * Limit how many SocialMedias to delete.
     */
    limit?: number
  }

  /**
   * SocialMedia without action
   */
  export type SocialMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialMedia
     */
    select?: SocialMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialMedia
     */
    omit?: SocialMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialMediaInclude<ExtArgs> | null
  }


  /**
   * Model DexLiquidity
   */

  export type AggregateDexLiquidity = {
    _count: DexLiquidityCountAggregateOutputType | null
    _avg: DexLiquidityAvgAggregateOutputType | null
    _sum: DexLiquiditySumAggregateOutputType | null
    _min: DexLiquidityMinAggregateOutputType | null
    _max: DexLiquidityMaxAggregateOutputType | null
  }

  export type DexLiquidityAvgAggregateOutputType = {
    tokenId: number | null
    ethLiquidity: Decimal | null
    tokenLiquidity: Decimal | null
  }

  export type DexLiquiditySumAggregateOutputType = {
    tokenId: number | null
    ethLiquidity: Decimal | null
    tokenLiquidity: Decimal | null
  }

  export type DexLiquidityMinAggregateOutputType = {
    tokenAddress: string | null
    tokenId: number | null
    ethLiquidity: Decimal | null
    tokenLiquidity: Decimal | null
    createdAt: Date | null
  }

  export type DexLiquidityMaxAggregateOutputType = {
    tokenAddress: string | null
    tokenId: number | null
    ethLiquidity: Decimal | null
    tokenLiquidity: Decimal | null
    createdAt: Date | null
  }

  export type DexLiquidityCountAggregateOutputType = {
    tokenAddress: number
    tokenId: number
    ethLiquidity: number
    tokenLiquidity: number
    createdAt: number
    _all: number
  }


  export type DexLiquidityAvgAggregateInputType = {
    tokenId?: true
    ethLiquidity?: true
    tokenLiquidity?: true
  }

  export type DexLiquiditySumAggregateInputType = {
    tokenId?: true
    ethLiquidity?: true
    tokenLiquidity?: true
  }

  export type DexLiquidityMinAggregateInputType = {
    tokenAddress?: true
    tokenId?: true
    ethLiquidity?: true
    tokenLiquidity?: true
    createdAt?: true
  }

  export type DexLiquidityMaxAggregateInputType = {
    tokenAddress?: true
    tokenId?: true
    ethLiquidity?: true
    tokenLiquidity?: true
    createdAt?: true
  }

  export type DexLiquidityCountAggregateInputType = {
    tokenAddress?: true
    tokenId?: true
    ethLiquidity?: true
    tokenLiquidity?: true
    createdAt?: true
    _all?: true
  }

  export type DexLiquidityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DexLiquidity to aggregate.
     */
    where?: DexLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DexLiquidities to fetch.
     */
    orderBy?: DexLiquidityOrderByWithRelationInput | DexLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DexLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DexLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DexLiquidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DexLiquidities
    **/
    _count?: true | DexLiquidityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DexLiquidityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DexLiquiditySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DexLiquidityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DexLiquidityMaxAggregateInputType
  }

  export type GetDexLiquidityAggregateType<T extends DexLiquidityAggregateArgs> = {
        [P in keyof T & keyof AggregateDexLiquidity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDexLiquidity[P]>
      : GetScalarType<T[P], AggregateDexLiquidity[P]>
  }




  export type DexLiquidityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DexLiquidityWhereInput
    orderBy?: DexLiquidityOrderByWithAggregationInput | DexLiquidityOrderByWithAggregationInput[]
    by: DexLiquidityScalarFieldEnum[] | DexLiquidityScalarFieldEnum
    having?: DexLiquidityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DexLiquidityCountAggregateInputType | true
    _avg?: DexLiquidityAvgAggregateInputType
    _sum?: DexLiquiditySumAggregateInputType
    _min?: DexLiquidityMinAggregateInputType
    _max?: DexLiquidityMaxAggregateInputType
  }

  export type DexLiquidityGroupByOutputType = {
    tokenAddress: string
    tokenId: number
    ethLiquidity: Decimal
    tokenLiquidity: Decimal
    createdAt: Date
    _count: DexLiquidityCountAggregateOutputType | null
    _avg: DexLiquidityAvgAggregateOutputType | null
    _sum: DexLiquiditySumAggregateOutputType | null
    _min: DexLiquidityMinAggregateOutputType | null
    _max: DexLiquidityMaxAggregateOutputType | null
  }

  type GetDexLiquidityGroupByPayload<T extends DexLiquidityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DexLiquidityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DexLiquidityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DexLiquidityGroupByOutputType[P]>
            : GetScalarType<T[P], DexLiquidityGroupByOutputType[P]>
        }
      >
    >


  export type DexLiquiditySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    tokenId?: boolean
    ethLiquidity?: boolean
    tokenLiquidity?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dexLiquidity"]>

  export type DexLiquiditySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    tokenId?: boolean
    ethLiquidity?: boolean
    tokenLiquidity?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dexLiquidity"]>

  export type DexLiquiditySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tokenAddress?: boolean
    tokenId?: boolean
    ethLiquidity?: boolean
    tokenLiquidity?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dexLiquidity"]>

  export type DexLiquiditySelectScalar = {
    tokenAddress?: boolean
    tokenId?: boolean
    ethLiquidity?: boolean
    tokenLiquidity?: boolean
    createdAt?: boolean
  }

  export type DexLiquidityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tokenAddress" | "tokenId" | "ethLiquidity" | "tokenLiquidity" | "createdAt", ExtArgs["result"]["dexLiquidity"]>
  export type DexLiquidityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type DexLiquidityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type DexLiquidityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $DexLiquidityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DexLiquidity"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tokenAddress: string
      tokenId: number
      ethLiquidity: Prisma.Decimal
      tokenLiquidity: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["dexLiquidity"]>
    composites: {}
  }

  type DexLiquidityGetPayload<S extends boolean | null | undefined | DexLiquidityDefaultArgs> = $Result.GetResult<Prisma.$DexLiquidityPayload, S>

  type DexLiquidityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DexLiquidityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: DexLiquidityCountAggregateInputType | true
    }

  export interface DexLiquidityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DexLiquidity'], meta: { name: 'DexLiquidity' } }
    /**
     * Find zero or one DexLiquidity that matches the filter.
     * @param {DexLiquidityFindUniqueArgs} args - Arguments to find a DexLiquidity
     * @example
     * // Get one DexLiquidity
     * const dexLiquidity = await prisma.dexLiquidity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DexLiquidityFindUniqueArgs>(args: SelectSubset<T, DexLiquidityFindUniqueArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DexLiquidity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DexLiquidityFindUniqueOrThrowArgs} args - Arguments to find a DexLiquidity
     * @example
     * // Get one DexLiquidity
     * const dexLiquidity = await prisma.dexLiquidity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DexLiquidityFindUniqueOrThrowArgs>(args: SelectSubset<T, DexLiquidityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DexLiquidity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityFindFirstArgs} args - Arguments to find a DexLiquidity
     * @example
     * // Get one DexLiquidity
     * const dexLiquidity = await prisma.dexLiquidity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DexLiquidityFindFirstArgs>(args?: SelectSubset<T, DexLiquidityFindFirstArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DexLiquidity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityFindFirstOrThrowArgs} args - Arguments to find a DexLiquidity
     * @example
     * // Get one DexLiquidity
     * const dexLiquidity = await prisma.dexLiquidity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DexLiquidityFindFirstOrThrowArgs>(args?: SelectSubset<T, DexLiquidityFindFirstOrThrowArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DexLiquidities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DexLiquidities
     * const dexLiquidities = await prisma.dexLiquidity.findMany()
     * 
     * // Get first 10 DexLiquidities
     * const dexLiquidities = await prisma.dexLiquidity.findMany({ take: 10 })
     * 
     * // Only select the `tokenAddress`
     * const dexLiquidityWithTokenAddressOnly = await prisma.dexLiquidity.findMany({ select: { tokenAddress: true } })
     * 
     */
    findMany<T extends DexLiquidityFindManyArgs>(args?: SelectSubset<T, DexLiquidityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DexLiquidity.
     * @param {DexLiquidityCreateArgs} args - Arguments to create a DexLiquidity.
     * @example
     * // Create one DexLiquidity
     * const DexLiquidity = await prisma.dexLiquidity.create({
     *   data: {
     *     // ... data to create a DexLiquidity
     *   }
     * })
     * 
     */
    create<T extends DexLiquidityCreateArgs>(args: SelectSubset<T, DexLiquidityCreateArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DexLiquidities.
     * @param {DexLiquidityCreateManyArgs} args - Arguments to create many DexLiquidities.
     * @example
     * // Create many DexLiquidities
     * const dexLiquidity = await prisma.dexLiquidity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DexLiquidityCreateManyArgs>(args?: SelectSubset<T, DexLiquidityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DexLiquidities and returns the data saved in the database.
     * @param {DexLiquidityCreateManyAndReturnArgs} args - Arguments to create many DexLiquidities.
     * @example
     * // Create many DexLiquidities
     * const dexLiquidity = await prisma.dexLiquidity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DexLiquidities and only return the `tokenAddress`
     * const dexLiquidityWithTokenAddressOnly = await prisma.dexLiquidity.createManyAndReturn({
     *   select: { tokenAddress: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DexLiquidityCreateManyAndReturnArgs>(args?: SelectSubset<T, DexLiquidityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DexLiquidity.
     * @param {DexLiquidityDeleteArgs} args - Arguments to delete one DexLiquidity.
     * @example
     * // Delete one DexLiquidity
     * const DexLiquidity = await prisma.dexLiquidity.delete({
     *   where: {
     *     // ... filter to delete one DexLiquidity
     *   }
     * })
     * 
     */
    delete<T extends DexLiquidityDeleteArgs>(args: SelectSubset<T, DexLiquidityDeleteArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DexLiquidity.
     * @param {DexLiquidityUpdateArgs} args - Arguments to update one DexLiquidity.
     * @example
     * // Update one DexLiquidity
     * const dexLiquidity = await prisma.dexLiquidity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DexLiquidityUpdateArgs>(args: SelectSubset<T, DexLiquidityUpdateArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DexLiquidities.
     * @param {DexLiquidityDeleteManyArgs} args - Arguments to filter DexLiquidities to delete.
     * @example
     * // Delete a few DexLiquidities
     * const { count } = await prisma.dexLiquidity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DexLiquidityDeleteManyArgs>(args?: SelectSubset<T, DexLiquidityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DexLiquidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DexLiquidities
     * const dexLiquidity = await prisma.dexLiquidity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DexLiquidityUpdateManyArgs>(args: SelectSubset<T, DexLiquidityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DexLiquidities and returns the data updated in the database.
     * @param {DexLiquidityUpdateManyAndReturnArgs} args - Arguments to update many DexLiquidities.
     * @example
     * // Update many DexLiquidities
     * const dexLiquidity = await prisma.dexLiquidity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DexLiquidities and only return the `tokenAddress`
     * const dexLiquidityWithTokenAddressOnly = await prisma.dexLiquidity.updateManyAndReturn({
     *   select: { tokenAddress: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DexLiquidityUpdateManyAndReturnArgs>(args: SelectSubset<T, DexLiquidityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DexLiquidity.
     * @param {DexLiquidityUpsertArgs} args - Arguments to update or create a DexLiquidity.
     * @example
     * // Update or create a DexLiquidity
     * const dexLiquidity = await prisma.dexLiquidity.upsert({
     *   create: {
     *     // ... data to create a DexLiquidity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DexLiquidity we want to update
     *   }
     * })
     */
    upsert<T extends DexLiquidityUpsertArgs>(args: SelectSubset<T, DexLiquidityUpsertArgs<ExtArgs>>): Prisma__DexLiquidityClient<$Result.GetResult<Prisma.$DexLiquidityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DexLiquidities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityCountArgs} args - Arguments to filter DexLiquidities to count.
     * @example
     * // Count the number of DexLiquidities
     * const count = await prisma.dexLiquidity.count({
     *   where: {
     *     // ... the filter for the DexLiquidities we want to count
     *   }
     * })
    **/
    count<T extends DexLiquidityCountArgs>(
      args?: Subset<T, DexLiquidityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DexLiquidityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DexLiquidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DexLiquidityAggregateArgs>(args: Subset<T, DexLiquidityAggregateArgs>): Prisma.PrismaPromise<GetDexLiquidityAggregateType<T>>

    /**
     * Group by DexLiquidity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DexLiquidityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DexLiquidityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DexLiquidityGroupByArgs['orderBy'] }
        : { orderBy?: DexLiquidityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DexLiquidityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDexLiquidityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DexLiquidity model
   */
  readonly fields: DexLiquidityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DexLiquidity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DexLiquidityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DexLiquidity model
   */
  interface DexLiquidityFieldRefs {
    readonly tokenAddress: FieldRef<"DexLiquidity", 'String'>
    readonly tokenId: FieldRef<"DexLiquidity", 'Int'>
    readonly ethLiquidity: FieldRef<"DexLiquidity", 'Decimal'>
    readonly tokenLiquidity: FieldRef<"DexLiquidity", 'Decimal'>
    readonly createdAt: FieldRef<"DexLiquidity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DexLiquidity findUnique
   */
  export type DexLiquidityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which DexLiquidity to fetch.
     */
    where: DexLiquidityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity findUniqueOrThrow
   */
  export type DexLiquidityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which DexLiquidity to fetch.
     */
    where: DexLiquidityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity findFirst
   */
  export type DexLiquidityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which DexLiquidity to fetch.
     */
    where?: DexLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DexLiquidities to fetch.
     */
    orderBy?: DexLiquidityOrderByWithRelationInput | DexLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DexLiquidities.
     */
    cursor?: DexLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DexLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DexLiquidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DexLiquidities.
     */
    distinct?: DexLiquidityScalarFieldEnum | DexLiquidityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity findFirstOrThrow
   */
  export type DexLiquidityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which DexLiquidity to fetch.
     */
    where?: DexLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DexLiquidities to fetch.
     */
    orderBy?: DexLiquidityOrderByWithRelationInput | DexLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DexLiquidities.
     */
    cursor?: DexLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DexLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DexLiquidities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DexLiquidities.
     */
    distinct?: DexLiquidityScalarFieldEnum | DexLiquidityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity findMany
   */
  export type DexLiquidityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * Filter, which DexLiquidities to fetch.
     */
    where?: DexLiquidityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DexLiquidities to fetch.
     */
    orderBy?: DexLiquidityOrderByWithRelationInput | DexLiquidityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DexLiquidities.
     */
    cursor?: DexLiquidityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DexLiquidities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DexLiquidities.
     */
    skip?: number
    distinct?: DexLiquidityScalarFieldEnum | DexLiquidityScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity create
   */
  export type DexLiquidityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * The data needed to create a DexLiquidity.
     */
    data: XOR<DexLiquidityCreateInput, DexLiquidityUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity createMany
   */
  export type DexLiquidityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DexLiquidities.
     */
    data: DexLiquidityCreateManyInput | DexLiquidityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DexLiquidity createManyAndReturn
   */
  export type DexLiquidityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * The data used to create many DexLiquidities.
     */
    data: DexLiquidityCreateManyInput | DexLiquidityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DexLiquidity update
   */
  export type DexLiquidityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * The data needed to update a DexLiquidity.
     */
    data: XOR<DexLiquidityUpdateInput, DexLiquidityUncheckedUpdateInput>
    /**
     * Choose, which DexLiquidity to update.
     */
    where: DexLiquidityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity updateMany
   */
  export type DexLiquidityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DexLiquidities.
     */
    data: XOR<DexLiquidityUpdateManyMutationInput, DexLiquidityUncheckedUpdateManyInput>
    /**
     * Filter which DexLiquidities to update
     */
    where?: DexLiquidityWhereInput
    /**
     * Limit how many DexLiquidities to update.
     */
    limit?: number
  }

  /**
   * DexLiquidity updateManyAndReturn
   */
  export type DexLiquidityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * The data used to update DexLiquidities.
     */
    data: XOR<DexLiquidityUpdateManyMutationInput, DexLiquidityUncheckedUpdateManyInput>
    /**
     * Filter which DexLiquidities to update
     */
    where?: DexLiquidityWhereInput
    /**
     * Limit how many DexLiquidities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DexLiquidity upsert
   */
  export type DexLiquidityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * The filter to search for the DexLiquidity to update in case it exists.
     */
    where: DexLiquidityWhereUniqueInput
    /**
     * In case the DexLiquidity found by the `where` argument doesn't exist, create a new DexLiquidity with this data.
     */
    create: XOR<DexLiquidityCreateInput, DexLiquidityUncheckedCreateInput>
    /**
     * In case the DexLiquidity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DexLiquidityUpdateInput, DexLiquidityUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity delete
   */
  export type DexLiquidityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
    /**
     * Filter which DexLiquidity to delete.
     */
    where: DexLiquidityWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * DexLiquidity deleteMany
   */
  export type DexLiquidityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DexLiquidities to delete
     */
    where?: DexLiquidityWhereInput
    /**
     * Limit how many DexLiquidities to delete.
     */
    limit?: number
  }

  /**
   * DexLiquidity without action
   */
  export type DexLiquidityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DexLiquidity
     */
    select?: DexLiquiditySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DexLiquidity
     */
    omit?: DexLiquidityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DexLiquidityInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    tokenAmount: Decimal | null
    ethAmount: Decimal | null
    fee: Decimal | null
    avgPrice: Decimal | null
  }

  export type TradeSumAggregateOutputType = {
    tokenAmount: Decimal | null
    ethAmount: Decimal | null
    fee: Decimal | null
    avgPrice: Decimal | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    tokenAddress: string | null
    accountAddress: string | null
    type: $Enums.TradeType | null
    tokenAmount: Decimal | null
    ethAmount: Decimal | null
    fee: Decimal | null
    avgPrice: Decimal | null
    createdAt: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    tokenAddress: string | null
    accountAddress: string | null
    type: $Enums.TradeType | null
    tokenAmount: Decimal | null
    ethAmount: Decimal | null
    fee: Decimal | null
    avgPrice: Decimal | null
    createdAt: Date | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    tokenAddress: number
    accountAddress: number
    type: number
    tokenAmount: number
    ethAmount: number
    fee: number
    avgPrice: number
    createdAt: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    tokenAmount?: true
    ethAmount?: true
    fee?: true
    avgPrice?: true
  }

  export type TradeSumAggregateInputType = {
    tokenAmount?: true
    ethAmount?: true
    fee?: true
    avgPrice?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    tokenAddress?: true
    accountAddress?: true
    type?: true
    tokenAmount?: true
    ethAmount?: true
    fee?: true
    avgPrice?: true
    createdAt?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    tokenAddress?: true
    accountAddress?: true
    type?: true
    tokenAmount?: true
    ethAmount?: true
    fee?: true
    avgPrice?: true
    createdAt?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    tokenAddress?: true
    accountAddress?: true
    type?: true
    tokenAmount?: true
    ethAmount?: true
    fee?: true
    avgPrice?: true
    createdAt?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    tokenAddress: string
    accountAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal
    ethAmount: Decimal
    fee: Decimal
    avgPrice: Decimal
    createdAt: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    type?: boolean
    tokenAmount?: boolean
    ethAmount?: boolean
    fee?: boolean
    avgPrice?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    type?: boolean
    tokenAmount?: boolean
    ethAmount?: boolean
    fee?: boolean
    avgPrice?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    type?: boolean
    tokenAmount?: boolean
    ethAmount?: boolean
    fee?: boolean
    avgPrice?: boolean
    createdAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    tokenAddress?: boolean
    accountAddress?: boolean
    type?: boolean
    tokenAmount?: boolean
    ethAmount?: boolean
    fee?: boolean
    avgPrice?: boolean
    createdAt?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenAddress" | "accountAddress" | "type" | "tokenAmount" | "ethAmount" | "fee" | "avgPrice" | "createdAt", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenAddress: string
      accountAddress: string
      type: $Enums.TradeType
      tokenAmount: Prisma.Decimal
      ethAmount: Prisma.Decimal
      fee: Prisma.Decimal
      avgPrice: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit' | 'relationLoadStrategy'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly tokenAddress: FieldRef<"Trade", 'String'>
    readonly accountAddress: FieldRef<"Trade", 'String'>
    readonly type: FieldRef<"Trade", 'TradeType'>
    readonly tokenAmount: FieldRef<"Trade", 'Decimal'>
    readonly ethAmount: FieldRef<"Trade", 'Decimal'>
    readonly fee: FieldRef<"Trade", 'Decimal'>
    readonly avgPrice: FieldRef<"Trade", 'Decimal'>
    readonly createdAt: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const CommentScalarFieldEnum: {
    id: 'id',
    tokenAddress: 'tokenAddress',
    accountAddress: 'accountAddress',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SignatureMessageScalarFieldEnum: {
    id: 'id',
    accountAddress: 'accountAddress',
    type: 'type',
    message: 'message',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt'
  };

  export type SignatureMessageScalarFieldEnum = (typeof SignatureMessageScalarFieldEnum)[keyof typeof SignatureMessageScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    address: 'address',
    creatorAddress: 'creatorAddress',
    name: 'name',
    symbol: 'symbol',
    description: 'description',
    logoUrl: 'logoUrl',
    websiteUrl: 'websiteUrl',
    totalSupply: 'totalSupply',
    bondingCurveSupply: 'bondingCurveSupply',
    ethReserve: 'ethReserve',
    reserve: 'reserve',
    price: 'price',
    finalPrice: 'finalPrice',
    dexPoolAddress: 'dexPoolAddress',
    migratedAt: 'migratedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const SocialMediaScalarFieldEnum: {
    tokenAddress: 'tokenAddress',
    telegramUrl: 'telegramUrl',
    discordUrl: 'discordUrl',
    xUrl: 'xUrl',
    facebookUrl: 'facebookUrl',
    instagramUrl: 'instagramUrl',
    redditUrl: 'redditUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialMediaScalarFieldEnum = (typeof SocialMediaScalarFieldEnum)[keyof typeof SocialMediaScalarFieldEnum]


  export const DexLiquidityScalarFieldEnum: {
    tokenAddress: 'tokenAddress',
    tokenId: 'tokenId',
    ethLiquidity: 'ethLiquidity',
    tokenLiquidity: 'tokenLiquidity',
    createdAt: 'createdAt'
  };

  export type DexLiquidityScalarFieldEnum = (typeof DexLiquidityScalarFieldEnum)[keyof typeof DexLiquidityScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    tokenAddress: 'tokenAddress',
    accountAddress: 'accountAddress',
    type: 'type',
    tokenAmount: 'tokenAmount',
    ethAmount: 'ethAmount',
    fee: 'fee',
    avgPrice: 'avgPrice',
    createdAt: 'createdAt'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SignatureMessageType'
   */
  export type EnumSignatureMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignatureMessageType'>
    


  /**
   * Reference to a field of type 'SignatureMessageType[]'
   */
  export type ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignatureMessageType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TradeType'
   */
  export type EnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType'>
    


  /**
   * Reference to a field of type 'TradeType[]'
   */
  export type ListEnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    address?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    comments?: CommentListRelationFilter
    signatureMessages?: SignatureMessageListRelationFilter
    tokens?: TokenListRelationFilter
    trades?: TradeListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    comments?: CommentOrderByRelationAggregateInput
    signatureMessages?: SignatureMessageOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
    trades?: TradeOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    comments?: CommentListRelationFilter
    signatureMessages?: SignatureMessageListRelationFilter
    tokens?: TokenListRelationFilter
    trades?: TradeListRelationFilter
  }, "address">

  export type AccountOrderByWithAggregationInput = {
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    tokenAddress?: StringFilter<"Comment"> | string
    accountAddress?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    token?: TokenOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    tokenAddress?: StringFilter<"Comment"> | string
    accountAddress?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    tokenAddress?: StringWithAggregatesFilter<"Comment"> | string
    accountAddress?: StringWithAggregatesFilter<"Comment"> | string
    text?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type SignatureMessageWhereInput = {
    AND?: SignatureMessageWhereInput | SignatureMessageWhereInput[]
    OR?: SignatureMessageWhereInput[]
    NOT?: SignatureMessageWhereInput | SignatureMessageWhereInput[]
    id?: StringFilter<"SignatureMessage"> | string
    accountAddress?: StringFilter<"SignatureMessage"> | string
    type?: EnumSignatureMessageTypeFilter<"SignatureMessage"> | $Enums.SignatureMessageType
    message?: StringFilter<"SignatureMessage"> | string
    createdAt?: DateTimeFilter<"SignatureMessage"> | Date | string
    expiredAt?: DateTimeFilter<"SignatureMessage"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type SignatureMessageOrderByWithRelationInput = {
    id?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type SignatureMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SignatureMessageWhereInput | SignatureMessageWhereInput[]
    OR?: SignatureMessageWhereInput[]
    NOT?: SignatureMessageWhereInput | SignatureMessageWhereInput[]
    accountAddress?: StringFilter<"SignatureMessage"> | string
    type?: EnumSignatureMessageTypeFilter<"SignatureMessage"> | $Enums.SignatureMessageType
    message?: StringFilter<"SignatureMessage"> | string
    createdAt?: DateTimeFilter<"SignatureMessage"> | Date | string
    expiredAt?: DateTimeFilter<"SignatureMessage"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type SignatureMessageOrderByWithAggregationInput = {
    id?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    _count?: SignatureMessageCountOrderByAggregateInput
    _max?: SignatureMessageMaxOrderByAggregateInput
    _min?: SignatureMessageMinOrderByAggregateInput
  }

  export type SignatureMessageScalarWhereWithAggregatesInput = {
    AND?: SignatureMessageScalarWhereWithAggregatesInput | SignatureMessageScalarWhereWithAggregatesInput[]
    OR?: SignatureMessageScalarWhereWithAggregatesInput[]
    NOT?: SignatureMessageScalarWhereWithAggregatesInput | SignatureMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SignatureMessage"> | string
    accountAddress?: StringWithAggregatesFilter<"SignatureMessage"> | string
    type?: EnumSignatureMessageTypeWithAggregatesFilter<"SignatureMessage"> | $Enums.SignatureMessageType
    message?: StringWithAggregatesFilter<"SignatureMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SignatureMessage"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"SignatureMessage"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    address?: StringFilter<"Token"> | string
    creatorAddress?: StringFilter<"Token"> | string
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    description?: StringFilter<"Token"> | string
    logoUrl?: StringFilter<"Token"> | string
    websiteUrl?: StringNullableFilter<"Token"> | string | null
    totalSupply?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: StringNullableFilter<"Token"> | string | null
    migratedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    creator?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    comments?: CommentListRelationFilter
    dexLiquidities?: DexLiquidityListRelationFilter
    socialMedia?: SocialMediaListRelationFilter
    trades?: TradeListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    address?: SortOrder
    creatorAddress?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
    dexPoolAddress?: SortOrderInput | SortOrder
    migratedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    creator?: AccountOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    dexLiquidities?: DexLiquidityOrderByRelationAggregateInput
    socialMedia?: SocialMediaOrderByRelationAggregateInput
    trades?: TradeOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    address?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    creatorAddress?: StringFilter<"Token"> | string
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    description?: StringFilter<"Token"> | string
    logoUrl?: StringFilter<"Token"> | string
    websiteUrl?: StringNullableFilter<"Token"> | string | null
    totalSupply?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: StringNullableFilter<"Token"> | string | null
    migratedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    creator?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    comments?: CommentListRelationFilter
    dexLiquidities?: DexLiquidityListRelationFilter
    socialMedia?: SocialMediaListRelationFilter
    trades?: TradeListRelationFilter
  }, "address">

  export type TokenOrderByWithAggregationInput = {
    address?: SortOrder
    creatorAddress?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
    dexPoolAddress?: SortOrderInput | SortOrder
    migratedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    address?: StringWithAggregatesFilter<"Token"> | string
    creatorAddress?: StringWithAggregatesFilter<"Token"> | string
    name?: StringWithAggregatesFilter<"Token"> | string
    symbol?: StringWithAggregatesFilter<"Token"> | string
    description?: StringWithAggregatesFilter<"Token"> | string
    logoUrl?: StringWithAggregatesFilter<"Token"> | string
    websiteUrl?: StringNullableWithAggregatesFilter<"Token"> | string | null
    totalSupply?: DecimalWithAggregatesFilter<"Token"> | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalWithAggregatesFilter<"Token"> | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalWithAggregatesFilter<"Token"> | Decimal | DecimalJsLike | number | string
    reserve?: DecimalWithAggregatesFilter<"Token"> | Decimal | DecimalJsLike | number | string
    price?: DecimalWithAggregatesFilter<"Token"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalWithAggregatesFilter<"Token"> | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: StringNullableWithAggregatesFilter<"Token"> | string | null
    migratedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
  }

  export type SocialMediaWhereInput = {
    AND?: SocialMediaWhereInput | SocialMediaWhereInput[]
    OR?: SocialMediaWhereInput[]
    NOT?: SocialMediaWhereInput | SocialMediaWhereInput[]
    tokenAddress?: StringFilter<"SocialMedia"> | string
    telegramUrl?: StringNullableFilter<"SocialMedia"> | string | null
    discordUrl?: StringNullableFilter<"SocialMedia"> | string | null
    xUrl?: StringNullableFilter<"SocialMedia"> | string | null
    facebookUrl?: StringNullableFilter<"SocialMedia"> | string | null
    instagramUrl?: StringNullableFilter<"SocialMedia"> | string | null
    redditUrl?: StringNullableFilter<"SocialMedia"> | string | null
    createdAt?: DateTimeFilter<"SocialMedia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SocialMedia"> | Date | string | null
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type SocialMediaOrderByWithRelationInput = {
    tokenAddress?: SortOrder
    telegramUrl?: SortOrderInput | SortOrder
    discordUrl?: SortOrderInput | SortOrder
    xUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    redditUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    token?: TokenOrderByWithRelationInput
  }

  export type SocialMediaWhereUniqueInput = Prisma.AtLeast<{
    tokenAddress?: string
    AND?: SocialMediaWhereInput | SocialMediaWhereInput[]
    OR?: SocialMediaWhereInput[]
    NOT?: SocialMediaWhereInput | SocialMediaWhereInput[]
    telegramUrl?: StringNullableFilter<"SocialMedia"> | string | null
    discordUrl?: StringNullableFilter<"SocialMedia"> | string | null
    xUrl?: StringNullableFilter<"SocialMedia"> | string | null
    facebookUrl?: StringNullableFilter<"SocialMedia"> | string | null
    instagramUrl?: StringNullableFilter<"SocialMedia"> | string | null
    redditUrl?: StringNullableFilter<"SocialMedia"> | string | null
    createdAt?: DateTimeFilter<"SocialMedia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SocialMedia"> | Date | string | null
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "tokenAddress">

  export type SocialMediaOrderByWithAggregationInput = {
    tokenAddress?: SortOrder
    telegramUrl?: SortOrderInput | SortOrder
    discordUrl?: SortOrderInput | SortOrder
    xUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    redditUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SocialMediaCountOrderByAggregateInput
    _max?: SocialMediaMaxOrderByAggregateInput
    _min?: SocialMediaMinOrderByAggregateInput
  }

  export type SocialMediaScalarWhereWithAggregatesInput = {
    AND?: SocialMediaScalarWhereWithAggregatesInput | SocialMediaScalarWhereWithAggregatesInput[]
    OR?: SocialMediaScalarWhereWithAggregatesInput[]
    NOT?: SocialMediaScalarWhereWithAggregatesInput | SocialMediaScalarWhereWithAggregatesInput[]
    tokenAddress?: StringWithAggregatesFilter<"SocialMedia"> | string
    telegramUrl?: StringNullableWithAggregatesFilter<"SocialMedia"> | string | null
    discordUrl?: StringNullableWithAggregatesFilter<"SocialMedia"> | string | null
    xUrl?: StringNullableWithAggregatesFilter<"SocialMedia"> | string | null
    facebookUrl?: StringNullableWithAggregatesFilter<"SocialMedia"> | string | null
    instagramUrl?: StringNullableWithAggregatesFilter<"SocialMedia"> | string | null
    redditUrl?: StringNullableWithAggregatesFilter<"SocialMedia"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SocialMedia"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SocialMedia"> | Date | string | null
  }

  export type DexLiquidityWhereInput = {
    AND?: DexLiquidityWhereInput | DexLiquidityWhereInput[]
    OR?: DexLiquidityWhereInput[]
    NOT?: DexLiquidityWhereInput | DexLiquidityWhereInput[]
    tokenAddress?: StringFilter<"DexLiquidity"> | string
    tokenId?: IntFilter<"DexLiquidity"> | number
    ethLiquidity?: DecimalFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DexLiquidity"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type DexLiquidityOrderByWithRelationInput = {
    tokenAddress?: SortOrder
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
    createdAt?: SortOrder
    token?: TokenOrderByWithRelationInput
  }

  export type DexLiquidityWhereUniqueInput = Prisma.AtLeast<{
    tokenAddress?: string
    AND?: DexLiquidityWhereInput | DexLiquidityWhereInput[]
    OR?: DexLiquidityWhereInput[]
    NOT?: DexLiquidityWhereInput | DexLiquidityWhereInput[]
    tokenId?: IntFilter<"DexLiquidity"> | number
    ethLiquidity?: DecimalFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DexLiquidity"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "tokenAddress">

  export type DexLiquidityOrderByWithAggregationInput = {
    tokenAddress?: SortOrder
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
    createdAt?: SortOrder
    _count?: DexLiquidityCountOrderByAggregateInput
    _avg?: DexLiquidityAvgOrderByAggregateInput
    _max?: DexLiquidityMaxOrderByAggregateInput
    _min?: DexLiquidityMinOrderByAggregateInput
    _sum?: DexLiquiditySumOrderByAggregateInput
  }

  export type DexLiquidityScalarWhereWithAggregatesInput = {
    AND?: DexLiquidityScalarWhereWithAggregatesInput | DexLiquidityScalarWhereWithAggregatesInput[]
    OR?: DexLiquidityScalarWhereWithAggregatesInput[]
    NOT?: DexLiquidityScalarWhereWithAggregatesInput | DexLiquidityScalarWhereWithAggregatesInput[]
    tokenAddress?: StringWithAggregatesFilter<"DexLiquidity"> | string
    tokenId?: IntWithAggregatesFilter<"DexLiquidity"> | number
    ethLiquidity?: DecimalWithAggregatesFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalWithAggregatesFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"DexLiquidity"> | Date | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    tokenAddress?: StringFilter<"Trade"> | string
    accountAddress?: StringFilter<"Trade"> | string
    type?: EnumTradeTypeFilter<"Trade"> | $Enums.TradeType
    tokenAmount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
    createdAt?: SortOrder
    token?: TokenOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    tokenAddress?: StringFilter<"Trade"> | string
    accountAddress?: StringFilter<"Trade"> | string
    type?: EnumTradeTypeFilter<"Trade"> | $Enums.TradeType
    tokenAmount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
    createdAt?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    tokenAddress?: StringWithAggregatesFilter<"Trade"> | string
    accountAddress?: StringWithAggregatesFilter<"Trade"> | string
    type?: EnumTradeTypeWithAggregatesFilter<"Trade"> | $Enums.TradeType
    tokenAmount?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type AccountCreateInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutAccountInput
    signatureMessages?: SignatureMessageCreateNestedManyWithoutAccountInput
    tokens?: TokenCreateNestedManyWithoutCreatorInput
    trades?: TradeCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    signatureMessages?: SignatureMessageUncheckedCreateNestedManyWithoutAccountInput
    tokens?: TokenUncheckedCreateNestedManyWithoutCreatorInput
    trades?: TradeUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutAccountNestedInput
    signatureMessages?: SignatureMessageUpdateManyWithoutAccountNestedInput
    tokens?: TokenUpdateManyWithoutCreatorNestedInput
    trades?: TradeUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    signatureMessages?: SignatureMessageUncheckedUpdateManyWithoutAccountNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutCreatorNestedInput
    trades?: TradeUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateInput = {
    text: string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutCommentsInput
    account: AccountCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    tokenAddress: string
    accountAddress: string
    text: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutCommentsNestedInput
    account?: AccountUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    tokenAddress: string
    accountAddress: string
    text: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatureMessageCreateInput = {
    id?: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt?: Date | string
    expiredAt: Date | string
    account: AccountCreateNestedOneWithoutSignatureMessagesInput
  }

  export type SignatureMessageUncheckedCreateInput = {
    id?: string
    accountAddress: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type SignatureMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutSignatureMessagesNestedInput
  }

  export type SignatureMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatureMessageCreateManyInput = {
    id?: string
    accountAddress: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type SignatureMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatureMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    creator: AccountCreateNestedOneWithoutTokensInput
    comments?: CommentCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaCreateNestedManyWithoutTokenInput
    trades?: TradeCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityUncheckedCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaUncheckedCreateNestedManyWithoutTokenInput
    trades?: TradeUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: AccountUpdateOneRequiredWithoutTokensNestedInput
    comments?: CommentUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUpdateManyWithoutTokenNestedInput
    trades?: TradeUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    creatorAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUncheckedUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUncheckedUpdateManyWithoutTokenNestedInput
    trades?: TradeUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TokenUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    address?: StringFieldUpdateOperationsInput | string
    creatorAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialMediaCreateInput = {
    telegramUrl?: string | null
    discordUrl?: string | null
    xUrl?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    redditUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    token: TokenCreateNestedOneWithoutSocialMediaInput
  }

  export type SocialMediaUncheckedCreateInput = {
    tokenAddress: string
    telegramUrl?: string | null
    discordUrl?: string | null
    xUrl?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    redditUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SocialMediaUpdateInput = {
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    token?: TokenUpdateOneRequiredWithoutSocialMediaNestedInput
  }

  export type SocialMediaUncheckedUpdateInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialMediaCreateManyInput = {
    tokenAddress: string
    telegramUrl?: string | null
    discordUrl?: string | null
    xUrl?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    redditUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SocialMediaUpdateManyMutationInput = {
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialMediaUncheckedUpdateManyInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DexLiquidityCreateInput = {
    tokenId: number
    ethLiquidity: Decimal | DecimalJsLike | number | string
    tokenLiquidity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutDexLiquiditiesInput
  }

  export type DexLiquidityUncheckedCreateInput = {
    tokenAddress: string
    tokenId: number
    ethLiquidity: Decimal | DecimalJsLike | number | string
    tokenLiquidity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DexLiquidityUpdateInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutDexLiquiditiesNestedInput
  }

  export type DexLiquidityUncheckedUpdateInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DexLiquidityCreateManyInput = {
    tokenAddress: string
    tokenId: number
    ethLiquidity: Decimal | DecimalJsLike | number | string
    tokenLiquidity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DexLiquidityUpdateManyMutationInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DexLiquidityUncheckedUpdateManyInput = {
    tokenAddress?: StringFieldUpdateOperationsInput | string
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateInput = {
    id: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutTradesInput
    account: AccountCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateInput = {
    id: string
    tokenAddress: string
    accountAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutTradesNestedInput
    account?: AccountUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyInput = {
    id: string
    tokenAddress: string
    accountAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SignatureMessageListRelationFilter = {
    every?: SignatureMessageWhereInput
    some?: SignatureMessageWhereInput
    none?: SignatureMessageWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignatureMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSignatureMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMessageType | EnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMessageTypeFilter<$PrismaModel> | $Enums.SignatureMessageType
  }

  export type SignatureMessageCountOrderByAggregateInput = {
    id?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type SignatureMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type SignatureMessageMinOrderByAggregateInput = {
    id?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type EnumSignatureMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMessageType | EnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.SignatureMessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSignatureMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumSignatureMessageTypeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DexLiquidityListRelationFilter = {
    every?: DexLiquidityWhereInput
    some?: DexLiquidityWhereInput
    none?: DexLiquidityWhereInput
  }

  export type SocialMediaListRelationFilter = {
    every?: SocialMediaWhereInput
    some?: SocialMediaWhereInput
    none?: SocialMediaWhereInput
  }

  export type DexLiquidityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    address?: SortOrder
    creatorAddress?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
    dexPoolAddress?: SortOrder
    migratedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    address?: SortOrder
    creatorAddress?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
    dexPoolAddress?: SortOrder
    migratedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    address?: SortOrder
    creatorAddress?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
    dexPoolAddress?: SortOrder
    migratedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    totalSupply?: SortOrder
    bondingCurveSupply?: SortOrder
    ethReserve?: SortOrder
    reserve?: SortOrder
    price?: SortOrder
    finalPrice?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SocialMediaCountOrderByAggregateInput = {
    tokenAddress?: SortOrder
    telegramUrl?: SortOrder
    discordUrl?: SortOrder
    xUrl?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    redditUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialMediaMaxOrderByAggregateInput = {
    tokenAddress?: SortOrder
    telegramUrl?: SortOrder
    discordUrl?: SortOrder
    xUrl?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    redditUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialMediaMinOrderByAggregateInput = {
    tokenAddress?: SortOrder
    telegramUrl?: SortOrder
    discordUrl?: SortOrder
    xUrl?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    redditUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DexLiquidityCountOrderByAggregateInput = {
    tokenAddress?: SortOrder
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
    createdAt?: SortOrder
  }

  export type DexLiquidityAvgOrderByAggregateInput = {
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
  }

  export type DexLiquidityMaxOrderByAggregateInput = {
    tokenAddress?: SortOrder
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
    createdAt?: SortOrder
  }

  export type DexLiquidityMinOrderByAggregateInput = {
    tokenAddress?: SortOrder
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
    createdAt?: SortOrder
  }

  export type DexLiquiditySumOrderByAggregateInput = {
    tokenId?: SortOrder
    ethLiquidity?: SortOrder
    tokenLiquidity?: SortOrder
  }

  export type EnumTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeFilter<$PrismaModel> | $Enums.TradeType
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    tokenAddress?: SortOrder
    accountAddress?: SortOrder
    type?: SortOrder
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    tokenAmount?: SortOrder
    ethAmount?: SortOrder
    fee?: SortOrder
    avgPrice?: SortOrder
  }

  export type EnumTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.TradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumTradeTypeFilter<$PrismaModel>
  }

  export type CommentCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SignatureMessageCreateNestedManyWithoutAccountInput = {
    create?: XOR<SignatureMessageCreateWithoutAccountInput, SignatureMessageUncheckedCreateWithoutAccountInput> | SignatureMessageCreateWithoutAccountInput[] | SignatureMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SignatureMessageCreateOrConnectWithoutAccountInput | SignatureMessageCreateOrConnectWithoutAccountInput[]
    createMany?: SignatureMessageCreateManyAccountInputEnvelope
    connect?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TokenCreateWithoutCreatorInput, TokenUncheckedCreateWithoutCreatorInput> | TokenCreateWithoutCreatorInput[] | TokenUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutCreatorInput | TokenCreateOrConnectWithoutCreatorInput[]
    createMany?: TokenCreateManyCreatorInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutAccountInput = {
    create?: XOR<TradeCreateWithoutAccountInput, TradeUncheckedCreateWithoutAccountInput> | TradeCreateWithoutAccountInput[] | TradeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutAccountInput | TradeCreateOrConnectWithoutAccountInput[]
    createMany?: TradeCreateManyAccountInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SignatureMessageUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SignatureMessageCreateWithoutAccountInput, SignatureMessageUncheckedCreateWithoutAccountInput> | SignatureMessageCreateWithoutAccountInput[] | SignatureMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SignatureMessageCreateOrConnectWithoutAccountInput | SignatureMessageCreateOrConnectWithoutAccountInput[]
    createMany?: SignatureMessageCreateManyAccountInputEnvelope
    connect?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TokenCreateWithoutCreatorInput, TokenUncheckedCreateWithoutCreatorInput> | TokenCreateWithoutCreatorInput[] | TokenUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutCreatorInput | TokenCreateOrConnectWithoutCreatorInput[]
    createMany?: TokenCreateManyCreatorInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TradeCreateWithoutAccountInput, TradeUncheckedCreateWithoutAccountInput> | TradeCreateWithoutAccountInput[] | TradeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutAccountInput | TradeCreateOrConnectWithoutAccountInput[]
    createMany?: TradeCreateManyAccountInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CommentUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAccountInput | CommentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAccountInput | CommentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAccountInput | CommentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SignatureMessageUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SignatureMessageCreateWithoutAccountInput, SignatureMessageUncheckedCreateWithoutAccountInput> | SignatureMessageCreateWithoutAccountInput[] | SignatureMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SignatureMessageCreateOrConnectWithoutAccountInput | SignatureMessageCreateOrConnectWithoutAccountInput[]
    upsert?: SignatureMessageUpsertWithWhereUniqueWithoutAccountInput | SignatureMessageUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SignatureMessageCreateManyAccountInputEnvelope
    set?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    disconnect?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    delete?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    connect?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    update?: SignatureMessageUpdateWithWhereUniqueWithoutAccountInput | SignatureMessageUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SignatureMessageUpdateManyWithWhereWithoutAccountInput | SignatureMessageUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SignatureMessageScalarWhereInput | SignatureMessageScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TokenCreateWithoutCreatorInput, TokenUncheckedCreateWithoutCreatorInput> | TokenCreateWithoutCreatorInput[] | TokenUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutCreatorInput | TokenCreateOrConnectWithoutCreatorInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutCreatorInput | TokenUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TokenCreateManyCreatorInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutCreatorInput | TokenUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutCreatorInput | TokenUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TradeCreateWithoutAccountInput, TradeUncheckedCreateWithoutAccountInput> | TradeCreateWithoutAccountInput[] | TradeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutAccountInput | TradeCreateOrConnectWithoutAccountInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutAccountInput | TradeUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TradeCreateManyAccountInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutAccountInput | TradeUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutAccountInput | TradeUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput> | CommentCreateWithoutAccountInput[] | CommentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAccountInput | CommentCreateOrConnectWithoutAccountInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAccountInput | CommentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CommentCreateManyAccountInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAccountInput | CommentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAccountInput | CommentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SignatureMessageUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SignatureMessageCreateWithoutAccountInput, SignatureMessageUncheckedCreateWithoutAccountInput> | SignatureMessageCreateWithoutAccountInput[] | SignatureMessageUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SignatureMessageCreateOrConnectWithoutAccountInput | SignatureMessageCreateOrConnectWithoutAccountInput[]
    upsert?: SignatureMessageUpsertWithWhereUniqueWithoutAccountInput | SignatureMessageUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SignatureMessageCreateManyAccountInputEnvelope
    set?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    disconnect?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    delete?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    connect?: SignatureMessageWhereUniqueInput | SignatureMessageWhereUniqueInput[]
    update?: SignatureMessageUpdateWithWhereUniqueWithoutAccountInput | SignatureMessageUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SignatureMessageUpdateManyWithWhereWithoutAccountInput | SignatureMessageUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SignatureMessageScalarWhereInput | SignatureMessageScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TokenCreateWithoutCreatorInput, TokenUncheckedCreateWithoutCreatorInput> | TokenCreateWithoutCreatorInput[] | TokenUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutCreatorInput | TokenCreateOrConnectWithoutCreatorInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutCreatorInput | TokenUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TokenCreateManyCreatorInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutCreatorInput | TokenUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutCreatorInput | TokenUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TradeCreateWithoutAccountInput, TradeUncheckedCreateWithoutAccountInput> | TradeCreateWithoutAccountInput[] | TradeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutAccountInput | TradeCreateOrConnectWithoutAccountInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutAccountInput | TradeUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TradeCreateManyAccountInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutAccountInput | TradeUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutAccountInput | TradeUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TokenCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TokenCreateWithoutCommentsInput, TokenUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutCommentsInput
    connect?: TokenWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutCommentsInput = {
    create?: XOR<AccountCreateWithoutCommentsInput, AccountUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCommentsInput
    connect?: AccountWhereUniqueInput
  }

  export type TokenUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TokenCreateWithoutCommentsInput, TokenUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutCommentsInput
    upsert?: TokenUpsertWithoutCommentsInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutCommentsInput, TokenUpdateWithoutCommentsInput>, TokenUncheckedUpdateWithoutCommentsInput>
  }

  export type AccountUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<AccountCreateWithoutCommentsInput, AccountUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCommentsInput
    upsert?: AccountUpsertWithoutCommentsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCommentsInput, AccountUpdateWithoutCommentsInput>, AccountUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountCreateNestedOneWithoutSignatureMessagesInput = {
    create?: XOR<AccountCreateWithoutSignatureMessagesInput, AccountUncheckedCreateWithoutSignatureMessagesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSignatureMessagesInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumSignatureMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.SignatureMessageType
  }

  export type AccountUpdateOneRequiredWithoutSignatureMessagesNestedInput = {
    create?: XOR<AccountCreateWithoutSignatureMessagesInput, AccountUncheckedCreateWithoutSignatureMessagesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSignatureMessagesInput
    upsert?: AccountUpsertWithoutSignatureMessagesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSignatureMessagesInput, AccountUpdateWithoutSignatureMessagesInput>, AccountUncheckedUpdateWithoutSignatureMessagesInput>
  }

  export type AccountCreateNestedOneWithoutTokensInput = {
    create?: XOR<AccountCreateWithoutTokensInput, AccountUncheckedCreateWithoutTokensInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTokensInput
    connect?: AccountWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutTokenInput = {
    create?: XOR<CommentCreateWithoutTokenInput, CommentUncheckedCreateWithoutTokenInput> | CommentCreateWithoutTokenInput[] | CommentUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTokenInput | CommentCreateOrConnectWithoutTokenInput[]
    createMany?: CommentCreateManyTokenInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DexLiquidityCreateNestedManyWithoutTokenInput = {
    create?: XOR<DexLiquidityCreateWithoutTokenInput, DexLiquidityUncheckedCreateWithoutTokenInput> | DexLiquidityCreateWithoutTokenInput[] | DexLiquidityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: DexLiquidityCreateOrConnectWithoutTokenInput | DexLiquidityCreateOrConnectWithoutTokenInput[]
    createMany?: DexLiquidityCreateManyTokenInputEnvelope
    connect?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
  }

  export type SocialMediaCreateNestedManyWithoutTokenInput = {
    create?: XOR<SocialMediaCreateWithoutTokenInput, SocialMediaUncheckedCreateWithoutTokenInput> | SocialMediaCreateWithoutTokenInput[] | SocialMediaUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: SocialMediaCreateOrConnectWithoutTokenInput | SocialMediaCreateOrConnectWithoutTokenInput[]
    createMany?: SocialMediaCreateManyTokenInputEnvelope
    connect?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutTokenInput = {
    create?: XOR<TradeCreateWithoutTokenInput, TradeUncheckedCreateWithoutTokenInput> | TradeCreateWithoutTokenInput[] | TradeUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTokenInput | TradeCreateOrConnectWithoutTokenInput[]
    createMany?: TradeCreateManyTokenInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<CommentCreateWithoutTokenInput, CommentUncheckedCreateWithoutTokenInput> | CommentCreateWithoutTokenInput[] | CommentUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTokenInput | CommentCreateOrConnectWithoutTokenInput[]
    createMany?: CommentCreateManyTokenInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type DexLiquidityUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<DexLiquidityCreateWithoutTokenInput, DexLiquidityUncheckedCreateWithoutTokenInput> | DexLiquidityCreateWithoutTokenInput[] | DexLiquidityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: DexLiquidityCreateOrConnectWithoutTokenInput | DexLiquidityCreateOrConnectWithoutTokenInput[]
    createMany?: DexLiquidityCreateManyTokenInputEnvelope
    connect?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
  }

  export type SocialMediaUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<SocialMediaCreateWithoutTokenInput, SocialMediaUncheckedCreateWithoutTokenInput> | SocialMediaCreateWithoutTokenInput[] | SocialMediaUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: SocialMediaCreateOrConnectWithoutTokenInput | SocialMediaCreateOrConnectWithoutTokenInput[]
    createMany?: SocialMediaCreateManyTokenInputEnvelope
    connect?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TradeCreateWithoutTokenInput, TradeUncheckedCreateWithoutTokenInput> | TradeCreateWithoutTokenInput[] | TradeUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTokenInput | TradeCreateOrConnectWithoutTokenInput[]
    createMany?: TradeCreateManyTokenInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AccountUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<AccountCreateWithoutTokensInput, AccountUncheckedCreateWithoutTokensInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTokensInput
    upsert?: AccountUpsertWithoutTokensInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTokensInput, AccountUpdateWithoutTokensInput>, AccountUncheckedUpdateWithoutTokensInput>
  }

  export type CommentUpdateManyWithoutTokenNestedInput = {
    create?: XOR<CommentCreateWithoutTokenInput, CommentUncheckedCreateWithoutTokenInput> | CommentCreateWithoutTokenInput[] | CommentUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTokenInput | CommentCreateOrConnectWithoutTokenInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTokenInput | CommentUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: CommentCreateManyTokenInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTokenInput | CommentUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTokenInput | CommentUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DexLiquidityUpdateManyWithoutTokenNestedInput = {
    create?: XOR<DexLiquidityCreateWithoutTokenInput, DexLiquidityUncheckedCreateWithoutTokenInput> | DexLiquidityCreateWithoutTokenInput[] | DexLiquidityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: DexLiquidityCreateOrConnectWithoutTokenInput | DexLiquidityCreateOrConnectWithoutTokenInput[]
    upsert?: DexLiquidityUpsertWithWhereUniqueWithoutTokenInput | DexLiquidityUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: DexLiquidityCreateManyTokenInputEnvelope
    set?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    disconnect?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    delete?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    connect?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    update?: DexLiquidityUpdateWithWhereUniqueWithoutTokenInput | DexLiquidityUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: DexLiquidityUpdateManyWithWhereWithoutTokenInput | DexLiquidityUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: DexLiquidityScalarWhereInput | DexLiquidityScalarWhereInput[]
  }

  export type SocialMediaUpdateManyWithoutTokenNestedInput = {
    create?: XOR<SocialMediaCreateWithoutTokenInput, SocialMediaUncheckedCreateWithoutTokenInput> | SocialMediaCreateWithoutTokenInput[] | SocialMediaUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: SocialMediaCreateOrConnectWithoutTokenInput | SocialMediaCreateOrConnectWithoutTokenInput[]
    upsert?: SocialMediaUpsertWithWhereUniqueWithoutTokenInput | SocialMediaUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: SocialMediaCreateManyTokenInputEnvelope
    set?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    disconnect?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    delete?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    connect?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    update?: SocialMediaUpdateWithWhereUniqueWithoutTokenInput | SocialMediaUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: SocialMediaUpdateManyWithWhereWithoutTokenInput | SocialMediaUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: SocialMediaScalarWhereInput | SocialMediaScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TradeCreateWithoutTokenInput, TradeUncheckedCreateWithoutTokenInput> | TradeCreateWithoutTokenInput[] | TradeUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTokenInput | TradeCreateOrConnectWithoutTokenInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutTokenInput | TradeUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TradeCreateManyTokenInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutTokenInput | TradeUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutTokenInput | TradeUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<CommentCreateWithoutTokenInput, CommentUncheckedCreateWithoutTokenInput> | CommentCreateWithoutTokenInput[] | CommentUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTokenInput | CommentCreateOrConnectWithoutTokenInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTokenInput | CommentUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: CommentCreateManyTokenInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTokenInput | CommentUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTokenInput | CommentUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DexLiquidityUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<DexLiquidityCreateWithoutTokenInput, DexLiquidityUncheckedCreateWithoutTokenInput> | DexLiquidityCreateWithoutTokenInput[] | DexLiquidityUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: DexLiquidityCreateOrConnectWithoutTokenInput | DexLiquidityCreateOrConnectWithoutTokenInput[]
    upsert?: DexLiquidityUpsertWithWhereUniqueWithoutTokenInput | DexLiquidityUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: DexLiquidityCreateManyTokenInputEnvelope
    set?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    disconnect?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    delete?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    connect?: DexLiquidityWhereUniqueInput | DexLiquidityWhereUniqueInput[]
    update?: DexLiquidityUpdateWithWhereUniqueWithoutTokenInput | DexLiquidityUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: DexLiquidityUpdateManyWithWhereWithoutTokenInput | DexLiquidityUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: DexLiquidityScalarWhereInput | DexLiquidityScalarWhereInput[]
  }

  export type SocialMediaUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<SocialMediaCreateWithoutTokenInput, SocialMediaUncheckedCreateWithoutTokenInput> | SocialMediaCreateWithoutTokenInput[] | SocialMediaUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: SocialMediaCreateOrConnectWithoutTokenInput | SocialMediaCreateOrConnectWithoutTokenInput[]
    upsert?: SocialMediaUpsertWithWhereUniqueWithoutTokenInput | SocialMediaUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: SocialMediaCreateManyTokenInputEnvelope
    set?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    disconnect?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    delete?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    connect?: SocialMediaWhereUniqueInput | SocialMediaWhereUniqueInput[]
    update?: SocialMediaUpdateWithWhereUniqueWithoutTokenInput | SocialMediaUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: SocialMediaUpdateManyWithWhereWithoutTokenInput | SocialMediaUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: SocialMediaScalarWhereInput | SocialMediaScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TradeCreateWithoutTokenInput, TradeUncheckedCreateWithoutTokenInput> | TradeCreateWithoutTokenInput[] | TradeUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTokenInput | TradeCreateOrConnectWithoutTokenInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutTokenInput | TradeUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TradeCreateManyTokenInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutTokenInput | TradeUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutTokenInput | TradeUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TokenCreateNestedOneWithoutSocialMediaInput = {
    create?: XOR<TokenCreateWithoutSocialMediaInput, TokenUncheckedCreateWithoutSocialMediaInput>
    connectOrCreate?: TokenCreateOrConnectWithoutSocialMediaInput
    connect?: TokenWhereUniqueInput
  }

  export type TokenUpdateOneRequiredWithoutSocialMediaNestedInput = {
    create?: XOR<TokenCreateWithoutSocialMediaInput, TokenUncheckedCreateWithoutSocialMediaInput>
    connectOrCreate?: TokenCreateOrConnectWithoutSocialMediaInput
    upsert?: TokenUpsertWithoutSocialMediaInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutSocialMediaInput, TokenUpdateWithoutSocialMediaInput>, TokenUncheckedUpdateWithoutSocialMediaInput>
  }

  export type TokenCreateNestedOneWithoutDexLiquiditiesInput = {
    create?: XOR<TokenCreateWithoutDexLiquiditiesInput, TokenUncheckedCreateWithoutDexLiquiditiesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutDexLiquiditiesInput
    connect?: TokenWhereUniqueInput
  }

  export type TokenUpdateOneRequiredWithoutDexLiquiditiesNestedInput = {
    create?: XOR<TokenCreateWithoutDexLiquiditiesInput, TokenUncheckedCreateWithoutDexLiquiditiesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutDexLiquiditiesInput
    upsert?: TokenUpsertWithoutDexLiquiditiesInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutDexLiquiditiesInput, TokenUpdateWithoutDexLiquiditiesInput>, TokenUncheckedUpdateWithoutDexLiquiditiesInput>
  }

  export type TokenCreateNestedOneWithoutTradesInput = {
    create?: XOR<TokenCreateWithoutTradesInput, TokenUncheckedCreateWithoutTradesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTradesInput
    connect?: TokenWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTradesInput = {
    create?: XOR<AccountCreateWithoutTradesInput, AccountUncheckedCreateWithoutTradesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTradesInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumTradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.TradeType
  }

  export type TokenUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<TokenCreateWithoutTradesInput, TokenUncheckedCreateWithoutTradesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTradesInput
    upsert?: TokenUpsertWithoutTradesInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutTradesInput, TokenUpdateWithoutTradesInput>, TokenUncheckedUpdateWithoutTradesInput>
  }

  export type AccountUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<AccountCreateWithoutTradesInput, AccountUncheckedCreateWithoutTradesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTradesInput
    upsert?: AccountUpsertWithoutTradesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTradesInput, AccountUpdateWithoutTradesInput>, AccountUncheckedUpdateWithoutTradesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSignatureMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMessageType | EnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMessageTypeFilter<$PrismaModel> | $Enums.SignatureMessageType
  }

  export type NestedEnumSignatureMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMessageType | EnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMessageType[] | ListEnumSignatureMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.SignatureMessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSignatureMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumSignatureMessageTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeFilter<$PrismaModel> | $Enums.TradeType
  }

  export type NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.TradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumTradeTypeFilter<$PrismaModel>
  }

  export type CommentCreateWithoutAccountInput = {
    text: string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAccountInput = {
    id?: number
    tokenAddress: string
    text: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAccountInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput>
  }

  export type CommentCreateManyAccountInputEnvelope = {
    data: CommentCreateManyAccountInput | CommentCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type SignatureMessageCreateWithoutAccountInput = {
    id?: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type SignatureMessageUncheckedCreateWithoutAccountInput = {
    id?: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type SignatureMessageCreateOrConnectWithoutAccountInput = {
    where: SignatureMessageWhereUniqueInput
    create: XOR<SignatureMessageCreateWithoutAccountInput, SignatureMessageUncheckedCreateWithoutAccountInput>
  }

  export type SignatureMessageCreateManyAccountInputEnvelope = {
    data: SignatureMessageCreateManyAccountInput | SignatureMessageCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutCreatorInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaCreateNestedManyWithoutTokenInput
    trades?: TradeCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutCreatorInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityUncheckedCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaUncheckedCreateNestedManyWithoutTokenInput
    trades?: TradeUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutCreatorInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutCreatorInput, TokenUncheckedCreateWithoutCreatorInput>
  }

  export type TokenCreateManyCreatorInputEnvelope = {
    data: TokenCreateManyCreatorInput | TokenCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutAccountInput = {
    id: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutAccountInput = {
    id: string
    tokenAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutAccountInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutAccountInput, TradeUncheckedCreateWithoutAccountInput>
  }

  export type TradeCreateManyAccountInputEnvelope = {
    data: TradeCreateManyAccountInput | TradeCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutAccountInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAccountInput, CommentUncheckedUpdateWithoutAccountInput>
    create: XOR<CommentCreateWithoutAccountInput, CommentUncheckedCreateWithoutAccountInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAccountInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAccountInput, CommentUncheckedUpdateWithoutAccountInput>
  }

  export type CommentUpdateManyWithWhereWithoutAccountInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAccountInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    tokenAddress?: StringFilter<"Comment"> | string
    accountAddress?: StringFilter<"Comment"> | string
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type SignatureMessageUpsertWithWhereUniqueWithoutAccountInput = {
    where: SignatureMessageWhereUniqueInput
    update: XOR<SignatureMessageUpdateWithoutAccountInput, SignatureMessageUncheckedUpdateWithoutAccountInput>
    create: XOR<SignatureMessageCreateWithoutAccountInput, SignatureMessageUncheckedCreateWithoutAccountInput>
  }

  export type SignatureMessageUpdateWithWhereUniqueWithoutAccountInput = {
    where: SignatureMessageWhereUniqueInput
    data: XOR<SignatureMessageUpdateWithoutAccountInput, SignatureMessageUncheckedUpdateWithoutAccountInput>
  }

  export type SignatureMessageUpdateManyWithWhereWithoutAccountInput = {
    where: SignatureMessageScalarWhereInput
    data: XOR<SignatureMessageUpdateManyMutationInput, SignatureMessageUncheckedUpdateManyWithoutAccountInput>
  }

  export type SignatureMessageScalarWhereInput = {
    AND?: SignatureMessageScalarWhereInput | SignatureMessageScalarWhereInput[]
    OR?: SignatureMessageScalarWhereInput[]
    NOT?: SignatureMessageScalarWhereInput | SignatureMessageScalarWhereInput[]
    id?: StringFilter<"SignatureMessage"> | string
    accountAddress?: StringFilter<"SignatureMessage"> | string
    type?: EnumSignatureMessageTypeFilter<"SignatureMessage"> | $Enums.SignatureMessageType
    message?: StringFilter<"SignatureMessage"> | string
    createdAt?: DateTimeFilter<"SignatureMessage"> | Date | string
    expiredAt?: DateTimeFilter<"SignatureMessage"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutCreatorInput, TokenUncheckedUpdateWithoutCreatorInput>
    create: XOR<TokenCreateWithoutCreatorInput, TokenUncheckedCreateWithoutCreatorInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutCreatorInput, TokenUncheckedUpdateWithoutCreatorInput>
  }

  export type TokenUpdateManyWithWhereWithoutCreatorInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    address?: StringFilter<"Token"> | string
    creatorAddress?: StringFilter<"Token"> | string
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    description?: StringFilter<"Token"> | string
    logoUrl?: StringFilter<"Token"> | string
    websiteUrl?: StringNullableFilter<"Token"> | string | null
    totalSupply?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    price?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFilter<"Token"> | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: StringNullableFilter<"Token"> | string | null
    migratedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
  }

  export type TradeUpsertWithWhereUniqueWithoutAccountInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutAccountInput, TradeUncheckedUpdateWithoutAccountInput>
    create: XOR<TradeCreateWithoutAccountInput, TradeUncheckedCreateWithoutAccountInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutAccountInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutAccountInput, TradeUncheckedUpdateWithoutAccountInput>
  }

  export type TradeUpdateManyWithWhereWithoutAccountInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutAccountInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: StringFilter<"Trade"> | string
    tokenAddress?: StringFilter<"Trade"> | string
    accountAddress?: StringFilter<"Trade"> | string
    type?: EnumTradeTypeFilter<"Trade"> | $Enums.TradeType
    tokenAmount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    fee?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Trade"> | Date | string
  }

  export type TokenCreateWithoutCommentsInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    creator: AccountCreateNestedOneWithoutTokensInput
    dexLiquidities?: DexLiquidityCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaCreateNestedManyWithoutTokenInput
    trades?: TradeCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutCommentsInput = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    dexLiquidities?: DexLiquidityUncheckedCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaUncheckedCreateNestedManyWithoutTokenInput
    trades?: TradeUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutCommentsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutCommentsInput, TokenUncheckedCreateWithoutCommentsInput>
  }

  export type AccountCreateWithoutCommentsInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    signatureMessages?: SignatureMessageCreateNestedManyWithoutAccountInput
    tokens?: TokenCreateNestedManyWithoutCreatorInput
    trades?: TradeCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCommentsInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    signatureMessages?: SignatureMessageUncheckedCreateNestedManyWithoutAccountInput
    tokens?: TokenUncheckedCreateNestedManyWithoutCreatorInput
    trades?: TradeUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCommentsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCommentsInput, AccountUncheckedCreateWithoutCommentsInput>
  }

  export type TokenUpsertWithoutCommentsInput = {
    update: XOR<TokenUpdateWithoutCommentsInput, TokenUncheckedUpdateWithoutCommentsInput>
    create: XOR<TokenCreateWithoutCommentsInput, TokenUncheckedCreateWithoutCommentsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutCommentsInput, TokenUncheckedUpdateWithoutCommentsInput>
  }

  export type TokenUpdateWithoutCommentsInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: AccountUpdateOneRequiredWithoutTokensNestedInput
    dexLiquidities?: DexLiquidityUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUpdateManyWithoutTokenNestedInput
    trades?: TradeUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutCommentsInput = {
    address?: StringFieldUpdateOperationsInput | string
    creatorAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dexLiquidities?: DexLiquidityUncheckedUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUncheckedUpdateManyWithoutTokenNestedInput
    trades?: TradeUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type AccountUpsertWithoutCommentsInput = {
    update: XOR<AccountUpdateWithoutCommentsInput, AccountUncheckedUpdateWithoutCommentsInput>
    create: XOR<AccountCreateWithoutCommentsInput, AccountUncheckedCreateWithoutCommentsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCommentsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCommentsInput, AccountUncheckedUpdateWithoutCommentsInput>
  }

  export type AccountUpdateWithoutCommentsInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signatureMessages?: SignatureMessageUpdateManyWithoutAccountNestedInput
    tokens?: TokenUpdateManyWithoutCreatorNestedInput
    trades?: TradeUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCommentsInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    signatureMessages?: SignatureMessageUncheckedUpdateManyWithoutAccountNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutCreatorNestedInput
    trades?: TradeUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutSignatureMessagesInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutAccountInput
    tokens?: TokenCreateNestedManyWithoutCreatorInput
    trades?: TradeCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSignatureMessagesInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    tokens?: TokenUncheckedCreateNestedManyWithoutCreatorInput
    trades?: TradeUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSignatureMessagesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSignatureMessagesInput, AccountUncheckedCreateWithoutSignatureMessagesInput>
  }

  export type AccountUpsertWithoutSignatureMessagesInput = {
    update: XOR<AccountUpdateWithoutSignatureMessagesInput, AccountUncheckedUpdateWithoutSignatureMessagesInput>
    create: XOR<AccountCreateWithoutSignatureMessagesInput, AccountUncheckedCreateWithoutSignatureMessagesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSignatureMessagesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSignatureMessagesInput, AccountUncheckedUpdateWithoutSignatureMessagesInput>
  }

  export type AccountUpdateWithoutSignatureMessagesInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutAccountNestedInput
    tokens?: TokenUpdateManyWithoutCreatorNestedInput
    trades?: TradeUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSignatureMessagesInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutCreatorNestedInput
    trades?: TradeUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutTokensInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutAccountInput
    signatureMessages?: SignatureMessageCreateNestedManyWithoutAccountInput
    trades?: TradeCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTokensInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    signatureMessages?: SignatureMessageUncheckedCreateNestedManyWithoutAccountInput
    trades?: TradeUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTokensInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTokensInput, AccountUncheckedCreateWithoutTokensInput>
  }

  export type CommentCreateWithoutTokenInput = {
    text: string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTokenInput = {
    id?: number
    accountAddress: string
    text: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutTokenInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTokenInput, CommentUncheckedCreateWithoutTokenInput>
  }

  export type CommentCreateManyTokenInputEnvelope = {
    data: CommentCreateManyTokenInput | CommentCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type DexLiquidityCreateWithoutTokenInput = {
    tokenId: number
    ethLiquidity: Decimal | DecimalJsLike | number | string
    tokenLiquidity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DexLiquidityUncheckedCreateWithoutTokenInput = {
    tokenId: number
    ethLiquidity: Decimal | DecimalJsLike | number | string
    tokenLiquidity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type DexLiquidityCreateOrConnectWithoutTokenInput = {
    where: DexLiquidityWhereUniqueInput
    create: XOR<DexLiquidityCreateWithoutTokenInput, DexLiquidityUncheckedCreateWithoutTokenInput>
  }

  export type DexLiquidityCreateManyTokenInputEnvelope = {
    data: DexLiquidityCreateManyTokenInput | DexLiquidityCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type SocialMediaCreateWithoutTokenInput = {
    telegramUrl?: string | null
    discordUrl?: string | null
    xUrl?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    redditUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SocialMediaUncheckedCreateWithoutTokenInput = {
    telegramUrl?: string | null
    discordUrl?: string | null
    xUrl?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    redditUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SocialMediaCreateOrConnectWithoutTokenInput = {
    where: SocialMediaWhereUniqueInput
    create: XOR<SocialMediaCreateWithoutTokenInput, SocialMediaUncheckedCreateWithoutTokenInput>
  }

  export type SocialMediaCreateManyTokenInputEnvelope = {
    data: SocialMediaCreateManyTokenInput | SocialMediaCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutTokenInput = {
    id: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    account: AccountCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutTokenInput = {
    id: string
    accountAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutTokenInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutTokenInput, TradeUncheckedCreateWithoutTokenInput>
  }

  export type TradeCreateManyTokenInputEnvelope = {
    data: TradeCreateManyTokenInput | TradeCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutTokensInput = {
    update: XOR<AccountUpdateWithoutTokensInput, AccountUncheckedUpdateWithoutTokensInput>
    create: XOR<AccountCreateWithoutTokensInput, AccountUncheckedCreateWithoutTokensInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTokensInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTokensInput, AccountUncheckedUpdateWithoutTokensInput>
  }

  export type AccountUpdateWithoutTokensInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutAccountNestedInput
    signatureMessages?: SignatureMessageUpdateManyWithoutAccountNestedInput
    trades?: TradeUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTokensInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    signatureMessages?: SignatureMessageUncheckedUpdateManyWithoutAccountNestedInput
    trades?: TradeUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutTokenInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTokenInput, CommentUncheckedUpdateWithoutTokenInput>
    create: XOR<CommentCreateWithoutTokenInput, CommentUncheckedCreateWithoutTokenInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTokenInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTokenInput, CommentUncheckedUpdateWithoutTokenInput>
  }

  export type CommentUpdateManyWithWhereWithoutTokenInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTokenInput>
  }

  export type DexLiquidityUpsertWithWhereUniqueWithoutTokenInput = {
    where: DexLiquidityWhereUniqueInput
    update: XOR<DexLiquidityUpdateWithoutTokenInput, DexLiquidityUncheckedUpdateWithoutTokenInput>
    create: XOR<DexLiquidityCreateWithoutTokenInput, DexLiquidityUncheckedCreateWithoutTokenInput>
  }

  export type DexLiquidityUpdateWithWhereUniqueWithoutTokenInput = {
    where: DexLiquidityWhereUniqueInput
    data: XOR<DexLiquidityUpdateWithoutTokenInput, DexLiquidityUncheckedUpdateWithoutTokenInput>
  }

  export type DexLiquidityUpdateManyWithWhereWithoutTokenInput = {
    where: DexLiquidityScalarWhereInput
    data: XOR<DexLiquidityUpdateManyMutationInput, DexLiquidityUncheckedUpdateManyWithoutTokenInput>
  }

  export type DexLiquidityScalarWhereInput = {
    AND?: DexLiquidityScalarWhereInput | DexLiquidityScalarWhereInput[]
    OR?: DexLiquidityScalarWhereInput[]
    NOT?: DexLiquidityScalarWhereInput | DexLiquidityScalarWhereInput[]
    tokenAddress?: StringFilter<"DexLiquidity"> | string
    tokenId?: IntFilter<"DexLiquidity"> | number
    ethLiquidity?: DecimalFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFilter<"DexLiquidity"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"DexLiquidity"> | Date | string
  }

  export type SocialMediaUpsertWithWhereUniqueWithoutTokenInput = {
    where: SocialMediaWhereUniqueInput
    update: XOR<SocialMediaUpdateWithoutTokenInput, SocialMediaUncheckedUpdateWithoutTokenInput>
    create: XOR<SocialMediaCreateWithoutTokenInput, SocialMediaUncheckedCreateWithoutTokenInput>
  }

  export type SocialMediaUpdateWithWhereUniqueWithoutTokenInput = {
    where: SocialMediaWhereUniqueInput
    data: XOR<SocialMediaUpdateWithoutTokenInput, SocialMediaUncheckedUpdateWithoutTokenInput>
  }

  export type SocialMediaUpdateManyWithWhereWithoutTokenInput = {
    where: SocialMediaScalarWhereInput
    data: XOR<SocialMediaUpdateManyMutationInput, SocialMediaUncheckedUpdateManyWithoutTokenInput>
  }

  export type SocialMediaScalarWhereInput = {
    AND?: SocialMediaScalarWhereInput | SocialMediaScalarWhereInput[]
    OR?: SocialMediaScalarWhereInput[]
    NOT?: SocialMediaScalarWhereInput | SocialMediaScalarWhereInput[]
    tokenAddress?: StringFilter<"SocialMedia"> | string
    telegramUrl?: StringNullableFilter<"SocialMedia"> | string | null
    discordUrl?: StringNullableFilter<"SocialMedia"> | string | null
    xUrl?: StringNullableFilter<"SocialMedia"> | string | null
    facebookUrl?: StringNullableFilter<"SocialMedia"> | string | null
    instagramUrl?: StringNullableFilter<"SocialMedia"> | string | null
    redditUrl?: StringNullableFilter<"SocialMedia"> | string | null
    createdAt?: DateTimeFilter<"SocialMedia"> | Date | string
    updatedAt?: DateTimeNullableFilter<"SocialMedia"> | Date | string | null
  }

  export type TradeUpsertWithWhereUniqueWithoutTokenInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutTokenInput, TradeUncheckedUpdateWithoutTokenInput>
    create: XOR<TradeCreateWithoutTokenInput, TradeUncheckedCreateWithoutTokenInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutTokenInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutTokenInput, TradeUncheckedUpdateWithoutTokenInput>
  }

  export type TradeUpdateManyWithWhereWithoutTokenInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenCreateWithoutSocialMediaInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    creator: AccountCreateNestedOneWithoutTokensInput
    comments?: CommentCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityCreateNestedManyWithoutTokenInput
    trades?: TradeCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutSocialMediaInput = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityUncheckedCreateNestedManyWithoutTokenInput
    trades?: TradeUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutSocialMediaInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutSocialMediaInput, TokenUncheckedCreateWithoutSocialMediaInput>
  }

  export type TokenUpsertWithoutSocialMediaInput = {
    update: XOR<TokenUpdateWithoutSocialMediaInput, TokenUncheckedUpdateWithoutSocialMediaInput>
    create: XOR<TokenCreateWithoutSocialMediaInput, TokenUncheckedCreateWithoutSocialMediaInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutSocialMediaInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutSocialMediaInput, TokenUncheckedUpdateWithoutSocialMediaInput>
  }

  export type TokenUpdateWithoutSocialMediaInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: AccountUpdateOneRequiredWithoutTokensNestedInput
    comments?: CommentUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUpdateManyWithoutTokenNestedInput
    trades?: TradeUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutSocialMediaInput = {
    address?: StringFieldUpdateOperationsInput | string
    creatorAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUncheckedUpdateManyWithoutTokenNestedInput
    trades?: TradeUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateWithoutDexLiquiditiesInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    creator: AccountCreateNestedOneWithoutTokensInput
    comments?: CommentCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaCreateNestedManyWithoutTokenInput
    trades?: TradeCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutDexLiquiditiesInput = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaUncheckedCreateNestedManyWithoutTokenInput
    trades?: TradeUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutDexLiquiditiesInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutDexLiquiditiesInput, TokenUncheckedCreateWithoutDexLiquiditiesInput>
  }

  export type TokenUpsertWithoutDexLiquiditiesInput = {
    update: XOR<TokenUpdateWithoutDexLiquiditiesInput, TokenUncheckedUpdateWithoutDexLiquiditiesInput>
    create: XOR<TokenCreateWithoutDexLiquiditiesInput, TokenUncheckedCreateWithoutDexLiquiditiesInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutDexLiquiditiesInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutDexLiquiditiesInput, TokenUncheckedUpdateWithoutDexLiquiditiesInput>
  }

  export type TokenUpdateWithoutDexLiquiditiesInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: AccountUpdateOneRequiredWithoutTokensNestedInput
    comments?: CommentUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUpdateManyWithoutTokenNestedInput
    trades?: TradeUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutDexLiquiditiesInput = {
    address?: StringFieldUpdateOperationsInput | string
    creatorAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUncheckedUpdateManyWithoutTokenNestedInput
    trades?: TradeUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateWithoutTradesInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    creator: AccountCreateNestedOneWithoutTokensInput
    comments?: CommentCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutTradesInput = {
    address: string
    creatorAddress: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTokenInput
    dexLiquidities?: DexLiquidityUncheckedCreateNestedManyWithoutTokenInput
    socialMedia?: SocialMediaUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutTradesInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTradesInput, TokenUncheckedCreateWithoutTradesInput>
  }

  export type AccountCreateWithoutTradesInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentCreateNestedManyWithoutAccountInput
    signatureMessages?: SignatureMessageCreateNestedManyWithoutAccountInput
    tokens?: TokenCreateNestedManyWithoutCreatorInput
  }

  export type AccountUncheckedCreateWithoutTradesInput = {
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutAccountInput
    signatureMessages?: SignatureMessageUncheckedCreateNestedManyWithoutAccountInput
    tokens?: TokenUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type AccountCreateOrConnectWithoutTradesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTradesInput, AccountUncheckedCreateWithoutTradesInput>
  }

  export type TokenUpsertWithoutTradesInput = {
    update: XOR<TokenUpdateWithoutTradesInput, TokenUncheckedUpdateWithoutTradesInput>
    create: XOR<TokenCreateWithoutTradesInput, TokenUncheckedCreateWithoutTradesInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutTradesInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutTradesInput, TokenUncheckedUpdateWithoutTradesInput>
  }

  export type TokenUpdateWithoutTradesInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: AccountUpdateOneRequiredWithoutTokensNestedInput
    comments?: CommentUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutTradesInput = {
    address?: StringFieldUpdateOperationsInput | string
    creatorAddress?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUncheckedUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type AccountUpsertWithoutTradesInput = {
    update: XOR<AccountUpdateWithoutTradesInput, AccountUncheckedUpdateWithoutTradesInput>
    create: XOR<AccountCreateWithoutTradesInput, AccountUncheckedCreateWithoutTradesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTradesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTradesInput, AccountUncheckedUpdateWithoutTradesInput>
  }

  export type AccountUpdateWithoutTradesInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutAccountNestedInput
    signatureMessages?: SignatureMessageUpdateManyWithoutAccountNestedInput
    tokens?: TokenUpdateManyWithoutCreatorNestedInput
  }

  export type AccountUncheckedUpdateWithoutTradesInput = {
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutAccountNestedInput
    signatureMessages?: SignatureMessageUncheckedUpdateManyWithoutAccountNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CommentCreateManyAccountInput = {
    id?: number
    tokenAddress: string
    text: string
    createdAt?: Date | string
  }

  export type SignatureMessageCreateManyAccountInput = {
    id?: string
    type: $Enums.SignatureMessageType
    message: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TokenCreateManyCreatorInput = {
    address: string
    name: string
    symbol: string
    description: string
    logoUrl: string
    websiteUrl?: string | null
    totalSupply: Decimal | DecimalJsLike | number | string
    bondingCurveSupply: Decimal | DecimalJsLike | number | string
    ethReserve: Decimal | DecimalJsLike | number | string
    reserve: Decimal | DecimalJsLike | number | string
    price: Decimal | DecimalJsLike | number | string
    finalPrice: Decimal | DecimalJsLike | number | string
    dexPoolAddress?: string | null
    migratedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TradeCreateManyAccountInput = {
    id: string
    tokenAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutAccountInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    tokenAddress?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatureMessageUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatureMessageUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignatureMessageUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSignatureMessageTypeFieldUpdateOperationsInput | $Enums.SignatureMessageType
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutCreatorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUpdateManyWithoutTokenNestedInput
    trades?: TradeUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutCreatorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutTokenNestedInput
    dexLiquidities?: DexLiquidityUncheckedUpdateManyWithoutTokenNestedInput
    socialMedia?: SocialMediaUncheckedUpdateManyWithoutTokenNestedInput
    trades?: TradeUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateManyWithoutCreatorInput = {
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: StringFieldUpdateOperationsInput | string
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    totalSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bondingCurveSupply?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethReserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reserve?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    finalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dexPoolAddress?: NullableStringFieldUpdateOperationsInput | string | null
    migratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TradeUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyTokenInput = {
    id?: number
    accountAddress: string
    text: string
    createdAt?: Date | string
  }

  export type DexLiquidityCreateManyTokenInput = {
    tokenId: number
    ethLiquidity: Decimal | DecimalJsLike | number | string
    tokenLiquidity: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type SocialMediaCreateManyTokenInput = {
    telegramUrl?: string | null
    discordUrl?: string | null
    xUrl?: string | null
    facebookUrl?: string | null
    instagramUrl?: string | null
    redditUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TradeCreateManyTokenInput = {
    id: string
    accountAddress: string
    type: $Enums.TradeType
    tokenAmount: Decimal | DecimalJsLike | number | string
    ethAmount: Decimal | DecimalJsLike | number | string
    fee: Decimal | DecimalJsLike | number | string
    avgPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutTokenInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountAddress?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountAddress?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DexLiquidityUpdateWithoutTokenInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DexLiquidityUncheckedUpdateWithoutTokenInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DexLiquidityUncheckedUpdateManyWithoutTokenInput = {
    tokenId?: IntFieldUpdateOperationsInput | number
    ethLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tokenLiquidity?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialMediaUpdateWithoutTokenInput = {
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialMediaUncheckedUpdateWithoutTokenInput = {
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SocialMediaUncheckedUpdateManyWithoutTokenInput = {
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discordUrl?: NullableStringFieldUpdateOperationsInput | string | null
    xUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    redditUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TradeUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountAddress?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    tokenAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ethAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    avgPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}