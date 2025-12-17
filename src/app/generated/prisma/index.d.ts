
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model SuccessStory
 * 
 */
export type SuccessStory = $Result.DefaultSelection<Prisma.$SuccessStoryPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model NewsUpdate
 * 
 */
export type NewsUpdate = $Result.DefaultSelection<Prisma.$NewsUpdatePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model YoutubeUrl
 * 
 */
export type YoutubeUrl = $Result.DefaultSelection<Prisma.$YoutubeUrlPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BlogCategory: {
  TECHNOLOGY: 'TECHNOLOGY',
  EDUCATION: 'EDUCATION',
  RESEARCH: 'RESEARCH',
  INNOVATION: 'INNOVATION',
  STUDENT_LIFE: 'STUDENT_LIFE'
};

export type BlogCategory = (typeof BlogCategory)[keyof typeof BlogCategory]


export const NewsPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type NewsPriority = (typeof NewsPriority)[keyof typeof NewsPriority]


export const NewsCategory: {
  ANNOUNCEMENT: 'ANNOUNCEMENT',
  EVENT: 'EVENT',
  ACHIEVEMENT: 'ACHIEVEMENT',
  RESEARCH: 'RESEARCH',
  PARTNERSHIP: 'PARTNERSHIP'
};

export type NewsCategory = (typeof NewsCategory)[keyof typeof NewsCategory]

}

export type BlogCategory = $Enums.BlogCategory

export const BlogCategory: typeof $Enums.BlogCategory

export type NewsPriority = $Enums.NewsPriority

export const NewsPriority: typeof $Enums.NewsPriority

export type NewsCategory = $Enums.NewsCategory

export const NewsCategory: typeof $Enums.NewsCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.successStory`: Exposes CRUD operations for the **SuccessStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuccessStories
    * const successStories = await prisma.successStory.findMany()
    * ```
    */
  get successStory(): Prisma.SuccessStoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsUpdate`: Exposes CRUD operations for the **NewsUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsUpdates
    * const newsUpdates = await prisma.newsUpdate.findMany()
    * ```
    */
  get newsUpdate(): Prisma.NewsUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.youtubeUrl`: Exposes CRUD operations for the **YoutubeUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YoutubeUrls
    * const youtubeUrls = await prisma.youtubeUrl.findMany()
    * ```
    */
  get youtubeUrl(): Prisma.YoutubeUrlDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    TeamMember: 'TeamMember',
    SuccessStory: 'SuccessStory',
    BlogPost: 'BlogPost',
    NewsUpdate: 'NewsUpdate',
    Image: 'Image',
    Video: 'Video',
    YoutubeUrl: 'YoutubeUrl'
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
      modelProps: "user" | "session" | "account" | "verification" | "teamMember" | "successStory" | "blogPost" | "newsUpdate" | "image" | "video" | "youtubeUrl"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      SuccessStory: {
        payload: Prisma.$SuccessStoryPayload<ExtArgs>
        fields: Prisma.SuccessStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuccessStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuccessStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          findFirst: {
            args: Prisma.SuccessStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuccessStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          findMany: {
            args: Prisma.SuccessStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>[]
          }
          create: {
            args: Prisma.SuccessStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          createMany: {
            args: Prisma.SuccessStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuccessStoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>[]
          }
          delete: {
            args: Prisma.SuccessStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          update: {
            args: Prisma.SuccessStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          deleteMany: {
            args: Prisma.SuccessStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuccessStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuccessStoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>[]
          }
          upsert: {
            args: Prisma.SuccessStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuccessStoryPayload>
          }
          aggregate: {
            args: Prisma.SuccessStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuccessStory>
          }
          groupBy: {
            args: Prisma.SuccessStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuccessStoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuccessStoryCountArgs<ExtArgs>
            result: $Utils.Optional<SuccessStoryCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      NewsUpdate: {
        payload: Prisma.$NewsUpdatePayload<ExtArgs>
        fields: Prisma.NewsUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          findFirst: {
            args: Prisma.NewsUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          findMany: {
            args: Prisma.NewsUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>[]
          }
          create: {
            args: Prisma.NewsUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          createMany: {
            args: Prisma.NewsUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>[]
          }
          delete: {
            args: Prisma.NewsUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          update: {
            args: Prisma.NewsUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          deleteMany: {
            args: Prisma.NewsUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>[]
          }
          upsert: {
            args: Prisma.NewsUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsUpdatePayload>
          }
          aggregate: {
            args: Prisma.NewsUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsUpdate>
          }
          groupBy: {
            args: Prisma.NewsUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<NewsUpdateCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      YoutubeUrl: {
        payload: Prisma.$YoutubeUrlPayload<ExtArgs>
        fields: Prisma.YoutubeUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YoutubeUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YoutubeUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>
          }
          findFirst: {
            args: Prisma.YoutubeUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YoutubeUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>
          }
          findMany: {
            args: Prisma.YoutubeUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>[]
          }
          create: {
            args: Prisma.YoutubeUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>
          }
          createMany: {
            args: Prisma.YoutubeUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YoutubeUrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>[]
          }
          delete: {
            args: Prisma.YoutubeUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>
          }
          update: {
            args: Prisma.YoutubeUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>
          }
          deleteMany: {
            args: Prisma.YoutubeUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YoutubeUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.YoutubeUrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>[]
          }
          upsert: {
            args: Prisma.YoutubeUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YoutubeUrlPayload>
          }
          aggregate: {
            args: Prisma.YoutubeUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYoutubeUrl>
          }
          groupBy: {
            args: Prisma.YoutubeUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<YoutubeUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.YoutubeUrlCountArgs<ExtArgs>
            result: $Utils.Optional<YoutubeUrlCountAggregateOutputType> | number
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
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    teamMember?: TeamMemberOmit
    successStory?: SuccessStoryOmit
    blogPost?: BlogPostOmit
    newsUpdate?: NewsUpdateOmit
    image?: ImageOmit
    video?: VideoOmit
    youtubeUrl?: YoutubeUrlOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type TeamMemberCountOutputType
   */

  export type TeamMemberCountOutputType = {
    images: number
    videos: number
    youtubeUrls: number
  }

  export type TeamMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | TeamMemberCountOutputTypeCountImagesArgs
    videos?: boolean | TeamMemberCountOutputTypeCountVideosArgs
    youtubeUrls?: boolean | TeamMemberCountOutputTypeCountYoutubeUrlsArgs
  }

  // Custom InputTypes
  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMemberCountOutputType
     */
    select?: TeamMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * TeamMemberCountOutputType without action
   */
  export type TeamMemberCountOutputTypeCountYoutubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeUrlWhereInput
  }


  /**
   * Count Type SuccessStoryCountOutputType
   */

  export type SuccessStoryCountOutputType = {
    images: number
    videos: number
    youtubeUrls: number
  }

  export type SuccessStoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SuccessStoryCountOutputTypeCountImagesArgs
    videos?: boolean | SuccessStoryCountOutputTypeCountVideosArgs
    youtubeUrls?: boolean | SuccessStoryCountOutputTypeCountYoutubeUrlsArgs
  }

  // Custom InputTypes
  /**
   * SuccessStoryCountOutputType without action
   */
  export type SuccessStoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStoryCountOutputType
     */
    select?: SuccessStoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuccessStoryCountOutputType without action
   */
  export type SuccessStoryCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * SuccessStoryCountOutputType without action
   */
  export type SuccessStoryCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * SuccessStoryCountOutputType without action
   */
  export type SuccessStoryCountOutputTypeCountYoutubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeUrlWhereInput
  }


  /**
   * Count Type BlogPostCountOutputType
   */

  export type BlogPostCountOutputType = {
    images: number
    videos: number
    youtubeUrls: number
  }

  export type BlogPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | BlogPostCountOutputTypeCountImagesArgs
    videos?: boolean | BlogPostCountOutputTypeCountVideosArgs
    youtubeUrls?: boolean | BlogPostCountOutputTypeCountYoutubeUrlsArgs
  }

  // Custom InputTypes
  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPostCountOutputType
     */
    select?: BlogPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * BlogPostCountOutputType without action
   */
  export type BlogPostCountOutputTypeCountYoutubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeUrlWhereInput
  }


  /**
   * Count Type NewsUpdateCountOutputType
   */

  export type NewsUpdateCountOutputType = {
    images: number
    videos: number
    youtubeUrls: number
  }

  export type NewsUpdateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | NewsUpdateCountOutputTypeCountImagesArgs
    videos?: boolean | NewsUpdateCountOutputTypeCountVideosArgs
    youtubeUrls?: boolean | NewsUpdateCountOutputTypeCountYoutubeUrlsArgs
  }

  // Custom InputTypes
  /**
   * NewsUpdateCountOutputType without action
   */
  export type NewsUpdateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdateCountOutputType
     */
    select?: NewsUpdateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsUpdateCountOutputType without action
   */
  export type NewsUpdateCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }

  /**
   * NewsUpdateCountOutputType without action
   */
  export type NewsUpdateCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * NewsUpdateCountOutputType without action
   */
  export type NewsUpdateCountOutputTypeCountYoutubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeUrlWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    banned: number
    banReason: number
    banExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    banned?: true
    banReason?: true
    banExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: string | null
    banned: boolean | null
    banReason: string | null
    banExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    banned?: boolean
    banReason?: boolean
    banExpires?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "banned" | "banReason" | "banExpires", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: string | null
      banned: boolean | null
      banReason: string | null
      banExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
    readonly banned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
    readonly banExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
    impersonatedBy: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    impersonatedBy: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    impersonatedBy?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    impersonatedBy: string | null
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    impersonatedBy?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId" | "impersonatedBy", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
      impersonatedBy: string | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly impersonatedBy: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
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
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
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
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
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
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
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
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
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
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    email: string | null
    phone: string | null
    bio: string | null
    expertise: string | null
    achievements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: string | null
    email: string | null
    phone: string | null
    bio: string | null
    expertise: string | null
    achievements: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    name: number
    position: number
    email: number
    phone: number
    bio: number
    expertise: number
    achievements: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    email?: true
    phone?: true
    bio?: true
    expertise?: true
    achievements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    email?: true
    phone?: true
    bio?: true
    expertise?: true
    achievements?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    email?: true
    phone?: true
    bio?: true
    expertise?: true
    achievements?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    name: string
    position: string
    email: string
    phone: string | null
    bio: string
    expertise: string | null
    achievements: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    bio?: boolean
    expertise?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | TeamMember$imagesArgs<ExtArgs>
    videos?: boolean | TeamMember$videosArgs<ExtArgs>
    youtubeUrls?: boolean | TeamMember$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | TeamMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    bio?: boolean
    expertise?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    bio?: boolean
    expertise?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    bio?: boolean
    expertise?: boolean
    achievements?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "email" | "phone" | "bio" | "expertise" | "achievements" | "createdAt" | "updatedAt", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | TeamMember$imagesArgs<ExtArgs>
    videos?: boolean | TeamMember$videosArgs<ExtArgs>
    youtubeUrls?: boolean | TeamMember$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | TeamMemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      youtubeUrls: Prisma.$YoutubeUrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      position: string
      email: string
      phone: string | null
      bio: string
      expertise: string | null
      achievements: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends TeamMember$imagesArgs<ExtArgs> = {}>(args?: Subset<T, TeamMember$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends TeamMember$videosArgs<ExtArgs> = {}>(args?: Subset<T, TeamMember$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    youtubeUrls<T extends TeamMember$youtubeUrlsArgs<ExtArgs> = {}>(args?: Subset<T, TeamMember$youtubeUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly name: FieldRef<"TeamMember", 'String'>
    readonly position: FieldRef<"TeamMember", 'String'>
    readonly email: FieldRef<"TeamMember", 'String'>
    readonly phone: FieldRef<"TeamMember", 'String'>
    readonly bio: FieldRef<"TeamMember", 'String'>
    readonly expertise: FieldRef<"TeamMember", 'String'>
    readonly achievements: FieldRef<"TeamMember", 'String'>
    readonly createdAt: FieldRef<"TeamMember", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember.images
   */
  export type TeamMember$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * TeamMember.videos
   */
  export type TeamMember$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * TeamMember.youtubeUrls
   */
  export type TeamMember$youtubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    where?: YoutubeUrlWhereInput
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    cursor?: YoutubeUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model SuccessStory
   */

  export type AggregateSuccessStory = {
    _count: SuccessStoryCountAggregateOutputType | null
    _avg: SuccessStoryAvgAggregateOutputType | null
    _sum: SuccessStorySumAggregateOutputType | null
    _min: SuccessStoryMinAggregateOutputType | null
    _max: SuccessStoryMaxAggregateOutputType | null
  }

  export type SuccessStoryAvgAggregateOutputType = {
    year: number | null
  }

  export type SuccessStorySumAggregateOutputType = {
    year: number | null
  }

  export type SuccessStoryMinAggregateOutputType = {
    id: string | null
    studentName: string | null
    year: number | null
    currentPosition: string | null
    company: string | null
    story: string | null
    impact: string | null
    advice: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuccessStoryMaxAggregateOutputType = {
    id: string | null
    studentName: string | null
    year: number | null
    currentPosition: string | null
    company: string | null
    story: string | null
    impact: string | null
    advice: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuccessStoryCountAggregateOutputType = {
    id: number
    studentName: number
    year: number
    currentPosition: number
    company: number
    story: number
    impact: number
    advice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuccessStoryAvgAggregateInputType = {
    year?: true
  }

  export type SuccessStorySumAggregateInputType = {
    year?: true
  }

  export type SuccessStoryMinAggregateInputType = {
    id?: true
    studentName?: true
    year?: true
    currentPosition?: true
    company?: true
    story?: true
    impact?: true
    advice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuccessStoryMaxAggregateInputType = {
    id?: true
    studentName?: true
    year?: true
    currentPosition?: true
    company?: true
    story?: true
    impact?: true
    advice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuccessStoryCountAggregateInputType = {
    id?: true
    studentName?: true
    year?: true
    currentPosition?: true
    company?: true
    story?: true
    impact?: true
    advice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuccessStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessStory to aggregate.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuccessStories
    **/
    _count?: true | SuccessStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuccessStoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuccessStorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuccessStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuccessStoryMaxAggregateInputType
  }

  export type GetSuccessStoryAggregateType<T extends SuccessStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSuccessStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuccessStory[P]>
      : GetScalarType<T[P], AggregateSuccessStory[P]>
  }




  export type SuccessStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuccessStoryWhereInput
    orderBy?: SuccessStoryOrderByWithAggregationInput | SuccessStoryOrderByWithAggregationInput[]
    by: SuccessStoryScalarFieldEnum[] | SuccessStoryScalarFieldEnum
    having?: SuccessStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuccessStoryCountAggregateInputType | true
    _avg?: SuccessStoryAvgAggregateInputType
    _sum?: SuccessStorySumAggregateInputType
    _min?: SuccessStoryMinAggregateInputType
    _max?: SuccessStoryMaxAggregateInputType
  }

  export type SuccessStoryGroupByOutputType = {
    id: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice: string | null
    createdAt: Date
    updatedAt: Date
    _count: SuccessStoryCountAggregateOutputType | null
    _avg: SuccessStoryAvgAggregateOutputType | null
    _sum: SuccessStorySumAggregateOutputType | null
    _min: SuccessStoryMinAggregateOutputType | null
    _max: SuccessStoryMaxAggregateOutputType | null
  }

  type GetSuccessStoryGroupByPayload<T extends SuccessStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuccessStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuccessStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuccessStoryGroupByOutputType[P]>
            : GetScalarType<T[P], SuccessStoryGroupByOutputType[P]>
        }
      >
    >


  export type SuccessStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    year?: boolean
    currentPosition?: boolean
    company?: boolean
    story?: boolean
    impact?: boolean
    advice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | SuccessStory$imagesArgs<ExtArgs>
    videos?: boolean | SuccessStory$videosArgs<ExtArgs>
    youtubeUrls?: boolean | SuccessStory$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | SuccessStoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["successStory"]>

  export type SuccessStorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    year?: boolean
    currentPosition?: boolean
    company?: boolean
    story?: boolean
    impact?: boolean
    advice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successStory"]>

  export type SuccessStorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    year?: boolean
    currentPosition?: boolean
    company?: boolean
    story?: boolean
    impact?: boolean
    advice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["successStory"]>

  export type SuccessStorySelectScalar = {
    id?: boolean
    studentName?: boolean
    year?: boolean
    currentPosition?: boolean
    company?: boolean
    story?: boolean
    impact?: boolean
    advice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuccessStoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentName" | "year" | "currentPosition" | "company" | "story" | "impact" | "advice" | "createdAt" | "updatedAt", ExtArgs["result"]["successStory"]>
  export type SuccessStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | SuccessStory$imagesArgs<ExtArgs>
    videos?: boolean | SuccessStory$videosArgs<ExtArgs>
    youtubeUrls?: boolean | SuccessStory$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | SuccessStoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuccessStoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuccessStoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuccessStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuccessStory"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      youtubeUrls: Prisma.$YoutubeUrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentName: string
      year: number
      currentPosition: string
      company: string
      story: string
      impact: string
      advice: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["successStory"]>
    composites: {}
  }

  type SuccessStoryGetPayload<S extends boolean | null | undefined | SuccessStoryDefaultArgs> = $Result.GetResult<Prisma.$SuccessStoryPayload, S>

  type SuccessStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuccessStoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuccessStoryCountAggregateInputType | true
    }

  export interface SuccessStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuccessStory'], meta: { name: 'SuccessStory' } }
    /**
     * Find zero or one SuccessStory that matches the filter.
     * @param {SuccessStoryFindUniqueArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuccessStoryFindUniqueArgs>(args: SelectSubset<T, SuccessStoryFindUniqueArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuccessStory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuccessStoryFindUniqueOrThrowArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuccessStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SuccessStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryFindFirstArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuccessStoryFindFirstArgs>(args?: SelectSubset<T, SuccessStoryFindFirstArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuccessStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryFindFirstOrThrowArgs} args - Arguments to find a SuccessStory
     * @example
     * // Get one SuccessStory
     * const successStory = await prisma.successStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuccessStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SuccessStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuccessStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuccessStories
     * const successStories = await prisma.successStory.findMany()
     * 
     * // Get first 10 SuccessStories
     * const successStories = await prisma.successStory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const successStoryWithIdOnly = await prisma.successStory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuccessStoryFindManyArgs>(args?: SelectSubset<T, SuccessStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuccessStory.
     * @param {SuccessStoryCreateArgs} args - Arguments to create a SuccessStory.
     * @example
     * // Create one SuccessStory
     * const SuccessStory = await prisma.successStory.create({
     *   data: {
     *     // ... data to create a SuccessStory
     *   }
     * })
     * 
     */
    create<T extends SuccessStoryCreateArgs>(args: SelectSubset<T, SuccessStoryCreateArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuccessStories.
     * @param {SuccessStoryCreateManyArgs} args - Arguments to create many SuccessStories.
     * @example
     * // Create many SuccessStories
     * const successStory = await prisma.successStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuccessStoryCreateManyArgs>(args?: SelectSubset<T, SuccessStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SuccessStories and returns the data saved in the database.
     * @param {SuccessStoryCreateManyAndReturnArgs} args - Arguments to create many SuccessStories.
     * @example
     * // Create many SuccessStories
     * const successStory = await prisma.successStory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SuccessStories and only return the `id`
     * const successStoryWithIdOnly = await prisma.successStory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuccessStoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SuccessStoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SuccessStory.
     * @param {SuccessStoryDeleteArgs} args - Arguments to delete one SuccessStory.
     * @example
     * // Delete one SuccessStory
     * const SuccessStory = await prisma.successStory.delete({
     *   where: {
     *     // ... filter to delete one SuccessStory
     *   }
     * })
     * 
     */
    delete<T extends SuccessStoryDeleteArgs>(args: SelectSubset<T, SuccessStoryDeleteArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuccessStory.
     * @param {SuccessStoryUpdateArgs} args - Arguments to update one SuccessStory.
     * @example
     * // Update one SuccessStory
     * const successStory = await prisma.successStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuccessStoryUpdateArgs>(args: SelectSubset<T, SuccessStoryUpdateArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuccessStories.
     * @param {SuccessStoryDeleteManyArgs} args - Arguments to filter SuccessStories to delete.
     * @example
     * // Delete a few SuccessStories
     * const { count } = await prisma.successStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuccessStoryDeleteManyArgs>(args?: SelectSubset<T, SuccessStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuccessStories
     * const successStory = await prisma.successStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuccessStoryUpdateManyArgs>(args: SelectSubset<T, SuccessStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuccessStories and returns the data updated in the database.
     * @param {SuccessStoryUpdateManyAndReturnArgs} args - Arguments to update many SuccessStories.
     * @example
     * // Update many SuccessStories
     * const successStory = await prisma.successStory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SuccessStories and only return the `id`
     * const successStoryWithIdOnly = await prisma.successStory.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuccessStoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SuccessStoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SuccessStory.
     * @param {SuccessStoryUpsertArgs} args - Arguments to update or create a SuccessStory.
     * @example
     * // Update or create a SuccessStory
     * const successStory = await prisma.successStory.upsert({
     *   create: {
     *     // ... data to create a SuccessStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuccessStory we want to update
     *   }
     * })
     */
    upsert<T extends SuccessStoryUpsertArgs>(args: SelectSubset<T, SuccessStoryUpsertArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuccessStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryCountArgs} args - Arguments to filter SuccessStories to count.
     * @example
     * // Count the number of SuccessStories
     * const count = await prisma.successStory.count({
     *   where: {
     *     // ... the filter for the SuccessStories we want to count
     *   }
     * })
    **/
    count<T extends SuccessStoryCountArgs>(
      args?: Subset<T, SuccessStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuccessStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuccessStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuccessStoryAggregateArgs>(args: Subset<T, SuccessStoryAggregateArgs>): Prisma.PrismaPromise<GetSuccessStoryAggregateType<T>>

    /**
     * Group by SuccessStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuccessStoryGroupByArgs} args - Group by arguments.
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
      T extends SuccessStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuccessStoryGroupByArgs['orderBy'] }
        : { orderBy?: SuccessStoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuccessStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuccessStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuccessStory model
   */
  readonly fields: SuccessStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuccessStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuccessStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends SuccessStory$imagesArgs<ExtArgs> = {}>(args?: Subset<T, SuccessStory$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends SuccessStory$videosArgs<ExtArgs> = {}>(args?: Subset<T, SuccessStory$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    youtubeUrls<T extends SuccessStory$youtubeUrlsArgs<ExtArgs> = {}>(args?: Subset<T, SuccessStory$youtubeUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SuccessStory model
   */
  interface SuccessStoryFieldRefs {
    readonly id: FieldRef<"SuccessStory", 'String'>
    readonly studentName: FieldRef<"SuccessStory", 'String'>
    readonly year: FieldRef<"SuccessStory", 'Int'>
    readonly currentPosition: FieldRef<"SuccessStory", 'String'>
    readonly company: FieldRef<"SuccessStory", 'String'>
    readonly story: FieldRef<"SuccessStory", 'String'>
    readonly impact: FieldRef<"SuccessStory", 'String'>
    readonly advice: FieldRef<"SuccessStory", 'String'>
    readonly createdAt: FieldRef<"SuccessStory", 'DateTime'>
    readonly updatedAt: FieldRef<"SuccessStory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuccessStory findUnique
   */
  export type SuccessStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory findUniqueOrThrow
   */
  export type SuccessStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory findFirst
   */
  export type SuccessStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessStories.
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessStories.
     */
    distinct?: SuccessStoryScalarFieldEnum | SuccessStoryScalarFieldEnum[]
  }

  /**
   * SuccessStory findFirstOrThrow
   */
  export type SuccessStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * Filter, which SuccessStory to fetch.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuccessStories.
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuccessStories.
     */
    distinct?: SuccessStoryScalarFieldEnum | SuccessStoryScalarFieldEnum[]
  }

  /**
   * SuccessStory findMany
   */
  export type SuccessStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * Filter, which SuccessStories to fetch.
     */
    where?: SuccessStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuccessStories to fetch.
     */
    orderBy?: SuccessStoryOrderByWithRelationInput | SuccessStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuccessStories.
     */
    cursor?: SuccessStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuccessStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuccessStories.
     */
    skip?: number
    distinct?: SuccessStoryScalarFieldEnum | SuccessStoryScalarFieldEnum[]
  }

  /**
   * SuccessStory create
   */
  export type SuccessStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SuccessStory.
     */
    data: XOR<SuccessStoryCreateInput, SuccessStoryUncheckedCreateInput>
  }

  /**
   * SuccessStory createMany
   */
  export type SuccessStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuccessStories.
     */
    data: SuccessStoryCreateManyInput | SuccessStoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuccessStory createManyAndReturn
   */
  export type SuccessStoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * The data used to create many SuccessStories.
     */
    data: SuccessStoryCreateManyInput | SuccessStoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuccessStory update
   */
  export type SuccessStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SuccessStory.
     */
    data: XOR<SuccessStoryUpdateInput, SuccessStoryUncheckedUpdateInput>
    /**
     * Choose, which SuccessStory to update.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory updateMany
   */
  export type SuccessStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuccessStories.
     */
    data: XOR<SuccessStoryUpdateManyMutationInput, SuccessStoryUncheckedUpdateManyInput>
    /**
     * Filter which SuccessStories to update
     */
    where?: SuccessStoryWhereInput
    /**
     * Limit how many SuccessStories to update.
     */
    limit?: number
  }

  /**
   * SuccessStory updateManyAndReturn
   */
  export type SuccessStoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * The data used to update SuccessStories.
     */
    data: XOR<SuccessStoryUpdateManyMutationInput, SuccessStoryUncheckedUpdateManyInput>
    /**
     * Filter which SuccessStories to update
     */
    where?: SuccessStoryWhereInput
    /**
     * Limit how many SuccessStories to update.
     */
    limit?: number
  }

  /**
   * SuccessStory upsert
   */
  export type SuccessStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SuccessStory to update in case it exists.
     */
    where: SuccessStoryWhereUniqueInput
    /**
     * In case the SuccessStory found by the `where` argument doesn't exist, create a new SuccessStory with this data.
     */
    create: XOR<SuccessStoryCreateInput, SuccessStoryUncheckedCreateInput>
    /**
     * In case the SuccessStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuccessStoryUpdateInput, SuccessStoryUncheckedUpdateInput>
  }

  /**
   * SuccessStory delete
   */
  export type SuccessStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    /**
     * Filter which SuccessStory to delete.
     */
    where: SuccessStoryWhereUniqueInput
  }

  /**
   * SuccessStory deleteMany
   */
  export type SuccessStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuccessStories to delete
     */
    where?: SuccessStoryWhereInput
    /**
     * Limit how many SuccessStories to delete.
     */
    limit?: number
  }

  /**
   * SuccessStory.images
   */
  export type SuccessStory$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * SuccessStory.videos
   */
  export type SuccessStory$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * SuccessStory.youtubeUrls
   */
  export type SuccessStory$youtubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    where?: YoutubeUrlWhereInput
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    cursor?: YoutubeUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * SuccessStory without action
   */
  export type SuccessStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    content: string | null
    author: string | null
    category: $Enums.BlogCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    content: string | null
    author: string | null
    category: $Enums.BlogCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    excerpt: number
    content: number
    author: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    content?: true
    author?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    content?: true
    author?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    content?: true
    author?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    author?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | BlogPost$imagesArgs<ExtArgs>
    videos?: boolean | BlogPost$videosArgs<ExtArgs>
    youtubeUrls?: boolean | BlogPost$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    author?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    author?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    content?: boolean
    author?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "excerpt" | "content" | "author" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | BlogPost$imagesArgs<ExtArgs>
    videos?: boolean | BlogPost$videosArgs<ExtArgs>
    youtubeUrls?: boolean | BlogPost$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | BlogPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      youtubeUrls: Prisma.$YoutubeUrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      excerpt: string
      content: string
      author: string
      category: $Enums.BlogCategory
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
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
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends BlogPost$imagesArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends BlogPost$videosArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    youtubeUrls<T extends BlogPost$youtubeUrlsArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$youtubeUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly author: FieldRef<"BlogPost", 'String'>
    readonly category: FieldRef<"BlogPost", 'BlogCategory'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.images
   */
  export type BlogPost$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * BlogPost.videos
   */
  export type BlogPost$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * BlogPost.youtubeUrls
   */
  export type BlogPost$youtubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    where?: YoutubeUrlWhereInput
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    cursor?: YoutubeUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model NewsUpdate
   */

  export type AggregateNewsUpdate = {
    _count: NewsUpdateCountAggregateOutputType | null
    _min: NewsUpdateMinAggregateOutputType | null
    _max: NewsUpdateMaxAggregateOutputType | null
  }

  export type NewsUpdateMinAggregateOutputType = {
    id: string | null
    headline: string | null
    summary: string | null
    content: string | null
    location: string | null
    eventDate: Date | null
    priority: $Enums.NewsPriority | null
    category: $Enums.NewsCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsUpdateMaxAggregateOutputType = {
    id: string | null
    headline: string | null
    summary: string | null
    content: string | null
    location: string | null
    eventDate: Date | null
    priority: $Enums.NewsPriority | null
    category: $Enums.NewsCategory | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsUpdateCountAggregateOutputType = {
    id: number
    headline: number
    summary: number
    content: number
    location: number
    eventDate: number
    priority: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsUpdateMinAggregateInputType = {
    id?: true
    headline?: true
    summary?: true
    content?: true
    location?: true
    eventDate?: true
    priority?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsUpdateMaxAggregateInputType = {
    id?: true
    headline?: true
    summary?: true
    content?: true
    location?: true
    eventDate?: true
    priority?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsUpdateCountAggregateInputType = {
    id?: true
    headline?: true
    summary?: true
    content?: true
    location?: true
    eventDate?: true
    priority?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsUpdate to aggregate.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsUpdates
    **/
    _count?: true | NewsUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsUpdateMaxAggregateInputType
  }

  export type GetNewsUpdateAggregateType<T extends NewsUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsUpdate[P]>
      : GetScalarType<T[P], AggregateNewsUpdate[P]>
  }




  export type NewsUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsUpdateWhereInput
    orderBy?: NewsUpdateOrderByWithAggregationInput | NewsUpdateOrderByWithAggregationInput[]
    by: NewsUpdateScalarFieldEnum[] | NewsUpdateScalarFieldEnum
    having?: NewsUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsUpdateCountAggregateInputType | true
    _min?: NewsUpdateMinAggregateInputType
    _max?: NewsUpdateMaxAggregateInputType
  }

  export type NewsUpdateGroupByOutputType = {
    id: string
    headline: string
    summary: string
    content: string
    location: string | null
    eventDate: Date | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt: Date
    updatedAt: Date
    _count: NewsUpdateCountAggregateOutputType | null
    _min: NewsUpdateMinAggregateOutputType | null
    _max: NewsUpdateMaxAggregateOutputType | null
  }

  type GetNewsUpdateGroupByPayload<T extends NewsUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], NewsUpdateGroupByOutputType[P]>
        }
      >
    >


  export type NewsUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    summary?: boolean
    content?: boolean
    location?: boolean
    eventDate?: boolean
    priority?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | NewsUpdate$imagesArgs<ExtArgs>
    videos?: boolean | NewsUpdate$videosArgs<ExtArgs>
    youtubeUrls?: boolean | NewsUpdate$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | NewsUpdateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsUpdate"]>

  export type NewsUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    summary?: boolean
    content?: boolean
    location?: boolean
    eventDate?: boolean
    priority?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsUpdate"]>

  export type NewsUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    summary?: boolean
    content?: boolean
    location?: boolean
    eventDate?: boolean
    priority?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsUpdate"]>

  export type NewsUpdateSelectScalar = {
    id?: boolean
    headline?: boolean
    summary?: boolean
    content?: boolean
    location?: boolean
    eventDate?: boolean
    priority?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "headline" | "summary" | "content" | "location" | "eventDate" | "priority" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["newsUpdate"]>
  export type NewsUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | NewsUpdate$imagesArgs<ExtArgs>
    videos?: boolean | NewsUpdate$videosArgs<ExtArgs>
    youtubeUrls?: boolean | NewsUpdate$youtubeUrlsArgs<ExtArgs>
    _count?: boolean | NewsUpdateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsUpdate"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      youtubeUrls: Prisma.$YoutubeUrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      headline: string
      summary: string
      content: string
      location: string | null
      eventDate: Date | null
      priority: $Enums.NewsPriority
      category: $Enums.NewsCategory
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsUpdate"]>
    composites: {}
  }

  type NewsUpdateGetPayload<S extends boolean | null | undefined | NewsUpdateDefaultArgs> = $Result.GetResult<Prisma.$NewsUpdatePayload, S>

  type NewsUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsUpdateCountAggregateInputType | true
    }

  export interface NewsUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsUpdate'], meta: { name: 'NewsUpdate' } }
    /**
     * Find zero or one NewsUpdate that matches the filter.
     * @param {NewsUpdateFindUniqueArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsUpdateFindUniqueArgs>(args: SelectSubset<T, NewsUpdateFindUniqueArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsUpdateFindUniqueOrThrowArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateFindFirstArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsUpdateFindFirstArgs>(args?: SelectSubset<T, NewsUpdateFindFirstArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateFindFirstOrThrowArgs} args - Arguments to find a NewsUpdate
     * @example
     * // Get one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsUpdates
     * const newsUpdates = await prisma.newsUpdate.findMany()
     * 
     * // Get first 10 NewsUpdates
     * const newsUpdates = await prisma.newsUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsUpdateWithIdOnly = await prisma.newsUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsUpdateFindManyArgs>(args?: SelectSubset<T, NewsUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsUpdate.
     * @param {NewsUpdateCreateArgs} args - Arguments to create a NewsUpdate.
     * @example
     * // Create one NewsUpdate
     * const NewsUpdate = await prisma.newsUpdate.create({
     *   data: {
     *     // ... data to create a NewsUpdate
     *   }
     * })
     * 
     */
    create<T extends NewsUpdateCreateArgs>(args: SelectSubset<T, NewsUpdateCreateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsUpdates.
     * @param {NewsUpdateCreateManyArgs} args - Arguments to create many NewsUpdates.
     * @example
     * // Create many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsUpdateCreateManyArgs>(args?: SelectSubset<T, NewsUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsUpdates and returns the data saved in the database.
     * @param {NewsUpdateCreateManyAndReturnArgs} args - Arguments to create many NewsUpdates.
     * @example
     * // Create many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsUpdates and only return the `id`
     * const newsUpdateWithIdOnly = await prisma.newsUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsUpdate.
     * @param {NewsUpdateDeleteArgs} args - Arguments to delete one NewsUpdate.
     * @example
     * // Delete one NewsUpdate
     * const NewsUpdate = await prisma.newsUpdate.delete({
     *   where: {
     *     // ... filter to delete one NewsUpdate
     *   }
     * })
     * 
     */
    delete<T extends NewsUpdateDeleteArgs>(args: SelectSubset<T, NewsUpdateDeleteArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsUpdate.
     * @param {NewsUpdateUpdateArgs} args - Arguments to update one NewsUpdate.
     * @example
     * // Update one NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateUpdateArgs>(args: SelectSubset<T, NewsUpdateUpdateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsUpdates.
     * @param {NewsUpdateDeleteManyArgs} args - Arguments to filter NewsUpdates to delete.
     * @example
     * // Delete a few NewsUpdates
     * const { count } = await prisma.newsUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsUpdateDeleteManyArgs>(args?: SelectSubset<T, NewsUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateUpdateManyArgs>(args: SelectSubset<T, NewsUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsUpdates and returns the data updated in the database.
     * @param {NewsUpdateUpdateManyAndReturnArgs} args - Arguments to update many NewsUpdates.
     * @example
     * // Update many NewsUpdates
     * const newsUpdate = await prisma.newsUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsUpdates and only return the `id`
     * const newsUpdateWithIdOnly = await prisma.newsUpdate.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsUpdate.
     * @param {NewsUpdateUpsertArgs} args - Arguments to update or create a NewsUpdate.
     * @example
     * // Update or create a NewsUpdate
     * const newsUpdate = await prisma.newsUpdate.upsert({
     *   create: {
     *     // ... data to create a NewsUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsUpdate we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpdateUpsertArgs>(args: SelectSubset<T, NewsUpdateUpsertArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateCountArgs} args - Arguments to filter NewsUpdates to count.
     * @example
     * // Count the number of NewsUpdates
     * const count = await prisma.newsUpdate.count({
     *   where: {
     *     // ... the filter for the NewsUpdates we want to count
     *   }
     * })
    **/
    count<T extends NewsUpdateCountArgs>(
      args?: Subset<T, NewsUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsUpdateAggregateArgs>(args: Subset<T, NewsUpdateAggregateArgs>): Prisma.PrismaPromise<GetNewsUpdateAggregateType<T>>

    /**
     * Group by NewsUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateGroupByArgs} args - Group by arguments.
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
      T extends NewsUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsUpdateGroupByArgs['orderBy'] }
        : { orderBy?: NewsUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsUpdate model
   */
  readonly fields: NewsUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends NewsUpdate$imagesArgs<ExtArgs> = {}>(args?: Subset<T, NewsUpdate$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends NewsUpdate$videosArgs<ExtArgs> = {}>(args?: Subset<T, NewsUpdate$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    youtubeUrls<T extends NewsUpdate$youtubeUrlsArgs<ExtArgs> = {}>(args?: Subset<T, NewsUpdate$youtubeUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NewsUpdate model
   */
  interface NewsUpdateFieldRefs {
    readonly id: FieldRef<"NewsUpdate", 'String'>
    readonly headline: FieldRef<"NewsUpdate", 'String'>
    readonly summary: FieldRef<"NewsUpdate", 'String'>
    readonly content: FieldRef<"NewsUpdate", 'String'>
    readonly location: FieldRef<"NewsUpdate", 'String'>
    readonly eventDate: FieldRef<"NewsUpdate", 'DateTime'>
    readonly priority: FieldRef<"NewsUpdate", 'NewsPriority'>
    readonly category: FieldRef<"NewsUpdate", 'NewsCategory'>
    readonly createdAt: FieldRef<"NewsUpdate", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsUpdate findUnique
   */
  export type NewsUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate findUniqueOrThrow
   */
  export type NewsUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate findFirst
   */
  export type NewsUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsUpdates.
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsUpdates.
     */
    distinct?: NewsUpdateScalarFieldEnum | NewsUpdateScalarFieldEnum[]
  }

  /**
   * NewsUpdate findFirstOrThrow
   */
  export type NewsUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which NewsUpdate to fetch.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsUpdates.
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsUpdates.
     */
    distinct?: NewsUpdateScalarFieldEnum | NewsUpdateScalarFieldEnum[]
  }

  /**
   * NewsUpdate findMany
   */
  export type NewsUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * Filter, which NewsUpdates to fetch.
     */
    where?: NewsUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsUpdates to fetch.
     */
    orderBy?: NewsUpdateOrderByWithRelationInput | NewsUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsUpdates.
     */
    cursor?: NewsUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsUpdates.
     */
    skip?: number
    distinct?: NewsUpdateScalarFieldEnum | NewsUpdateScalarFieldEnum[]
  }

  /**
   * NewsUpdate create
   */
  export type NewsUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsUpdate.
     */
    data: XOR<NewsUpdateCreateInput, NewsUpdateUncheckedCreateInput>
  }

  /**
   * NewsUpdate createMany
   */
  export type NewsUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsUpdates.
     */
    data: NewsUpdateCreateManyInput | NewsUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsUpdate createManyAndReturn
   */
  export type NewsUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many NewsUpdates.
     */
    data: NewsUpdateCreateManyInput | NewsUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsUpdate update
   */
  export type NewsUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsUpdate.
     */
    data: XOR<NewsUpdateUpdateInput, NewsUpdateUncheckedUpdateInput>
    /**
     * Choose, which NewsUpdate to update.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate updateMany
   */
  export type NewsUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsUpdates.
     */
    data: XOR<NewsUpdateUpdateManyMutationInput, NewsUpdateUncheckedUpdateManyInput>
    /**
     * Filter which NewsUpdates to update
     */
    where?: NewsUpdateWhereInput
    /**
     * Limit how many NewsUpdates to update.
     */
    limit?: number
  }

  /**
   * NewsUpdate updateManyAndReturn
   */
  export type NewsUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * The data used to update NewsUpdates.
     */
    data: XOR<NewsUpdateUpdateManyMutationInput, NewsUpdateUncheckedUpdateManyInput>
    /**
     * Filter which NewsUpdates to update
     */
    where?: NewsUpdateWhereInput
    /**
     * Limit how many NewsUpdates to update.
     */
    limit?: number
  }

  /**
   * NewsUpdate upsert
   */
  export type NewsUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsUpdate to update in case it exists.
     */
    where: NewsUpdateWhereUniqueInput
    /**
     * In case the NewsUpdate found by the `where` argument doesn't exist, create a new NewsUpdate with this data.
     */
    create: XOR<NewsUpdateCreateInput, NewsUpdateUncheckedCreateInput>
    /**
     * In case the NewsUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateUpdateInput, NewsUpdateUncheckedUpdateInput>
  }

  /**
   * NewsUpdate delete
   */
  export type NewsUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    /**
     * Filter which NewsUpdate to delete.
     */
    where: NewsUpdateWhereUniqueInput
  }

  /**
   * NewsUpdate deleteMany
   */
  export type NewsUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsUpdates to delete
     */
    where?: NewsUpdateWhereInput
    /**
     * Limit how many NewsUpdates to delete.
     */
    limit?: number
  }

  /**
   * NewsUpdate.images
   */
  export type NewsUpdate$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * NewsUpdate.videos
   */
  export type NewsUpdate$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * NewsUpdate.youtubeUrls
   */
  export type NewsUpdate$youtubeUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    where?: YoutubeUrlWhereInput
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    cursor?: YoutubeUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * NewsUpdate without action
   */
  export type NewsUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    createdAt: number
    updatedAt: number
    blogPostId: number
    teamMemberId: number
    newsUpdateId: number
    successStoryId: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    alt: string | null
    createdAt: Date
    updatedAt: Date
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | Image$blogPostArgs<ExtArgs>
    teamMember?: boolean | Image$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Image$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Image$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | Image$blogPostArgs<ExtArgs>
    teamMember?: boolean | Image$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Image$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Image$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | Image$blogPostArgs<ExtArgs>
    teamMember?: boolean | Image$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Image$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Image$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "createdAt" | "updatedAt" | "blogPostId" | "teamMemberId" | "newsUpdateId" | "successStoryId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Image$blogPostArgs<ExtArgs>
    teamMember?: boolean | Image$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Image$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Image$successStoryArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Image$blogPostArgs<ExtArgs>
    teamMember?: boolean | Image$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Image$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Image$successStoryArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Image$blogPostArgs<ExtArgs>
    teamMember?: boolean | Image$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Image$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Image$successStoryArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs> | null
      teamMember: Prisma.$TeamMemberPayload<ExtArgs> | null
      newsUpdate: Prisma.$NewsUpdatePayload<ExtArgs> | null
      successStory: Prisma.$SuccessStoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt: string | null
      createdAt: Date
      updatedAt: Date
      blogPostId: string | null
      teamMemberId: string | null
      newsUpdateId: string | null
      successStoryId: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends Image$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, Image$blogPostArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teamMember<T extends Image$teamMemberArgs<ExtArgs> = {}>(args?: Subset<T, Image$teamMemberArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    newsUpdate<T extends Image$newsUpdateArgs<ExtArgs> = {}>(args?: Subset<T, Image$newsUpdateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    successStory<T extends Image$successStoryArgs<ExtArgs> = {}>(args?: Subset<T, Image$successStoryArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
    readonly blogPostId: FieldRef<"Image", 'String'>
    readonly teamMemberId: FieldRef<"Image", 'String'>
    readonly newsUpdateId: FieldRef<"Image", 'String'>
    readonly successStoryId: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.blogPost
   */
  export type Image$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
  }

  /**
   * Image.teamMember
   */
  export type Image$teamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
  }

  /**
   * Image.newsUpdate
   */
  export type Image$newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    where?: NewsUpdateWhereInput
  }

  /**
   * Image.successStory
   */
  export type Image$successStoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    where?: SuccessStoryWhereInput
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    url: number
    title: number
    createdAt: number
    updatedAt: number
    blogPostId: number
    teamMemberId: number
    newsUpdateId: number
    successStoryId: number
    _all: number
  }


  export type VideoMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    url: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
    _count: VideoCountAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | Video$blogPostArgs<ExtArgs>
    teamMember?: boolean | Video$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Video$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Video$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | Video$blogPostArgs<ExtArgs>
    teamMember?: boolean | Video$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Video$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Video$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | Video$blogPostArgs<ExtArgs>
    teamMember?: boolean | Video$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Video$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Video$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "createdAt" | "updatedAt" | "blogPostId" | "teamMemberId" | "newsUpdateId" | "successStoryId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Video$blogPostArgs<ExtArgs>
    teamMember?: boolean | Video$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Video$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Video$successStoryArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Video$blogPostArgs<ExtArgs>
    teamMember?: boolean | Video$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Video$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Video$successStoryArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | Video$blogPostArgs<ExtArgs>
    teamMember?: boolean | Video$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | Video$newsUpdateArgs<ExtArgs>
    successStory?: boolean | Video$successStoryArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs> | null
      teamMember: Prisma.$TeamMemberPayload<ExtArgs> | null
      newsUpdate: Prisma.$NewsUpdatePayload<ExtArgs> | null
      successStory: Prisma.$SuccessStoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      createdAt: Date
      updatedAt: Date
      blogPostId: string | null
      teamMemberId: string | null
      newsUpdateId: string | null
      successStoryId: string | null
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends Video$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, Video$blogPostArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teamMember<T extends Video$teamMemberArgs<ExtArgs> = {}>(args?: Subset<T, Video$teamMemberArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    newsUpdate<T extends Video$newsUpdateArgs<ExtArgs> = {}>(args?: Subset<T, Video$newsUpdateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    successStory<T extends Video$successStoryArgs<ExtArgs> = {}>(args?: Subset<T, Video$successStoryArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly url: FieldRef<"Video", 'String'>
    readonly title: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
    readonly blogPostId: FieldRef<"Video", 'String'>
    readonly teamMemberId: FieldRef<"Video", 'String'>
    readonly newsUpdateId: FieldRef<"Video", 'String'>
    readonly successStoryId: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.blogPost
   */
  export type Video$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
  }

  /**
   * Video.teamMember
   */
  export type Video$teamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
  }

  /**
   * Video.newsUpdate
   */
  export type Video$newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    where?: NewsUpdateWhereInput
  }

  /**
   * Video.successStory
   */
  export type Video$successStoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    where?: SuccessStoryWhereInput
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model YoutubeUrl
   */

  export type AggregateYoutubeUrl = {
    _count: YoutubeUrlCountAggregateOutputType | null
    _min: YoutubeUrlMinAggregateOutputType | null
    _max: YoutubeUrlMaxAggregateOutputType | null
  }

  export type YoutubeUrlMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
  }

  export type YoutubeUrlMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
  }

  export type YoutubeUrlCountAggregateOutputType = {
    id: number
    url: number
    title: number
    createdAt: number
    updatedAt: number
    blogPostId: number
    teamMemberId: number
    newsUpdateId: number
    successStoryId: number
    _all: number
  }


  export type YoutubeUrlMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
  }

  export type YoutubeUrlMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
  }

  export type YoutubeUrlCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    blogPostId?: true
    teamMemberId?: true
    newsUpdateId?: true
    successStoryId?: true
    _all?: true
  }

  export type YoutubeUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoutubeUrl to aggregate.
     */
    where?: YoutubeUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeUrls to fetch.
     */
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YoutubeUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YoutubeUrls
    **/
    _count?: true | YoutubeUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YoutubeUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YoutubeUrlMaxAggregateInputType
  }

  export type GetYoutubeUrlAggregateType<T extends YoutubeUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateYoutubeUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYoutubeUrl[P]>
      : GetScalarType<T[P], AggregateYoutubeUrl[P]>
  }




  export type YoutubeUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YoutubeUrlWhereInput
    orderBy?: YoutubeUrlOrderByWithAggregationInput | YoutubeUrlOrderByWithAggregationInput[]
    by: YoutubeUrlScalarFieldEnum[] | YoutubeUrlScalarFieldEnum
    having?: YoutubeUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YoutubeUrlCountAggregateInputType | true
    _min?: YoutubeUrlMinAggregateInputType
    _max?: YoutubeUrlMaxAggregateInputType
  }

  export type YoutubeUrlGroupByOutputType = {
    id: string
    url: string
    title: string | null
    createdAt: Date
    updatedAt: Date
    blogPostId: string | null
    teamMemberId: string | null
    newsUpdateId: string | null
    successStoryId: string | null
    _count: YoutubeUrlCountAggregateOutputType | null
    _min: YoutubeUrlMinAggregateOutputType | null
    _max: YoutubeUrlMaxAggregateOutputType | null
  }

  type GetYoutubeUrlGroupByPayload<T extends YoutubeUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YoutubeUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YoutubeUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YoutubeUrlGroupByOutputType[P]>
            : GetScalarType<T[P], YoutubeUrlGroupByOutputType[P]>
        }
      >
    >


  export type YoutubeUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | YoutubeUrl$blogPostArgs<ExtArgs>
    teamMember?: boolean | YoutubeUrl$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | YoutubeUrl$newsUpdateArgs<ExtArgs>
    successStory?: boolean | YoutubeUrl$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["youtubeUrl"]>

  export type YoutubeUrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | YoutubeUrl$blogPostArgs<ExtArgs>
    teamMember?: boolean | YoutubeUrl$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | YoutubeUrl$newsUpdateArgs<ExtArgs>
    successStory?: boolean | YoutubeUrl$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["youtubeUrl"]>

  export type YoutubeUrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
    blogPost?: boolean | YoutubeUrl$blogPostArgs<ExtArgs>
    teamMember?: boolean | YoutubeUrl$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | YoutubeUrl$newsUpdateArgs<ExtArgs>
    successStory?: boolean | YoutubeUrl$successStoryArgs<ExtArgs>
  }, ExtArgs["result"]["youtubeUrl"]>

  export type YoutubeUrlSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blogPostId?: boolean
    teamMemberId?: boolean
    newsUpdateId?: boolean
    successStoryId?: boolean
  }

  export type YoutubeUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "createdAt" | "updatedAt" | "blogPostId" | "teamMemberId" | "newsUpdateId" | "successStoryId", ExtArgs["result"]["youtubeUrl"]>
  export type YoutubeUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | YoutubeUrl$blogPostArgs<ExtArgs>
    teamMember?: boolean | YoutubeUrl$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | YoutubeUrl$newsUpdateArgs<ExtArgs>
    successStory?: boolean | YoutubeUrl$successStoryArgs<ExtArgs>
  }
  export type YoutubeUrlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | YoutubeUrl$blogPostArgs<ExtArgs>
    teamMember?: boolean | YoutubeUrl$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | YoutubeUrl$newsUpdateArgs<ExtArgs>
    successStory?: boolean | YoutubeUrl$successStoryArgs<ExtArgs>
  }
  export type YoutubeUrlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blogPost?: boolean | YoutubeUrl$blogPostArgs<ExtArgs>
    teamMember?: boolean | YoutubeUrl$teamMemberArgs<ExtArgs>
    newsUpdate?: boolean | YoutubeUrl$newsUpdateArgs<ExtArgs>
    successStory?: boolean | YoutubeUrl$successStoryArgs<ExtArgs>
  }

  export type $YoutubeUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YoutubeUrl"
    objects: {
      blogPost: Prisma.$BlogPostPayload<ExtArgs> | null
      teamMember: Prisma.$TeamMemberPayload<ExtArgs> | null
      newsUpdate: Prisma.$NewsUpdatePayload<ExtArgs> | null
      successStory: Prisma.$SuccessStoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      createdAt: Date
      updatedAt: Date
      blogPostId: string | null
      teamMemberId: string | null
      newsUpdateId: string | null
      successStoryId: string | null
    }, ExtArgs["result"]["youtubeUrl"]>
    composites: {}
  }

  type YoutubeUrlGetPayload<S extends boolean | null | undefined | YoutubeUrlDefaultArgs> = $Result.GetResult<Prisma.$YoutubeUrlPayload, S>

  type YoutubeUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<YoutubeUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: YoutubeUrlCountAggregateInputType | true
    }

  export interface YoutubeUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YoutubeUrl'], meta: { name: 'YoutubeUrl' } }
    /**
     * Find zero or one YoutubeUrl that matches the filter.
     * @param {YoutubeUrlFindUniqueArgs} args - Arguments to find a YoutubeUrl
     * @example
     * // Get one YoutubeUrl
     * const youtubeUrl = await prisma.youtubeUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YoutubeUrlFindUniqueArgs>(args: SelectSubset<T, YoutubeUrlFindUniqueArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one YoutubeUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {YoutubeUrlFindUniqueOrThrowArgs} args - Arguments to find a YoutubeUrl
     * @example
     * // Get one YoutubeUrl
     * const youtubeUrl = await prisma.youtubeUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YoutubeUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, YoutubeUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YoutubeUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlFindFirstArgs} args - Arguments to find a YoutubeUrl
     * @example
     * // Get one YoutubeUrl
     * const youtubeUrl = await prisma.youtubeUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YoutubeUrlFindFirstArgs>(args?: SelectSubset<T, YoutubeUrlFindFirstArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first YoutubeUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlFindFirstOrThrowArgs} args - Arguments to find a YoutubeUrl
     * @example
     * // Get one YoutubeUrl
     * const youtubeUrl = await prisma.youtubeUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YoutubeUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, YoutubeUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more YoutubeUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YoutubeUrls
     * const youtubeUrls = await prisma.youtubeUrl.findMany()
     * 
     * // Get first 10 YoutubeUrls
     * const youtubeUrls = await prisma.youtubeUrl.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const youtubeUrlWithIdOnly = await prisma.youtubeUrl.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YoutubeUrlFindManyArgs>(args?: SelectSubset<T, YoutubeUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a YoutubeUrl.
     * @param {YoutubeUrlCreateArgs} args - Arguments to create a YoutubeUrl.
     * @example
     * // Create one YoutubeUrl
     * const YoutubeUrl = await prisma.youtubeUrl.create({
     *   data: {
     *     // ... data to create a YoutubeUrl
     *   }
     * })
     * 
     */
    create<T extends YoutubeUrlCreateArgs>(args: SelectSubset<T, YoutubeUrlCreateArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many YoutubeUrls.
     * @param {YoutubeUrlCreateManyArgs} args - Arguments to create many YoutubeUrls.
     * @example
     * // Create many YoutubeUrls
     * const youtubeUrl = await prisma.youtubeUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YoutubeUrlCreateManyArgs>(args?: SelectSubset<T, YoutubeUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YoutubeUrls and returns the data saved in the database.
     * @param {YoutubeUrlCreateManyAndReturnArgs} args - Arguments to create many YoutubeUrls.
     * @example
     * // Create many YoutubeUrls
     * const youtubeUrl = await prisma.youtubeUrl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YoutubeUrls and only return the `id`
     * const youtubeUrlWithIdOnly = await prisma.youtubeUrl.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YoutubeUrlCreateManyAndReturnArgs>(args?: SelectSubset<T, YoutubeUrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a YoutubeUrl.
     * @param {YoutubeUrlDeleteArgs} args - Arguments to delete one YoutubeUrl.
     * @example
     * // Delete one YoutubeUrl
     * const YoutubeUrl = await prisma.youtubeUrl.delete({
     *   where: {
     *     // ... filter to delete one YoutubeUrl
     *   }
     * })
     * 
     */
    delete<T extends YoutubeUrlDeleteArgs>(args: SelectSubset<T, YoutubeUrlDeleteArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one YoutubeUrl.
     * @param {YoutubeUrlUpdateArgs} args - Arguments to update one YoutubeUrl.
     * @example
     * // Update one YoutubeUrl
     * const youtubeUrl = await prisma.youtubeUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YoutubeUrlUpdateArgs>(args: SelectSubset<T, YoutubeUrlUpdateArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more YoutubeUrls.
     * @param {YoutubeUrlDeleteManyArgs} args - Arguments to filter YoutubeUrls to delete.
     * @example
     * // Delete a few YoutubeUrls
     * const { count } = await prisma.youtubeUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YoutubeUrlDeleteManyArgs>(args?: SelectSubset<T, YoutubeUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YoutubeUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YoutubeUrls
     * const youtubeUrl = await prisma.youtubeUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YoutubeUrlUpdateManyArgs>(args: SelectSubset<T, YoutubeUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YoutubeUrls and returns the data updated in the database.
     * @param {YoutubeUrlUpdateManyAndReturnArgs} args - Arguments to update many YoutubeUrls.
     * @example
     * // Update many YoutubeUrls
     * const youtubeUrl = await prisma.youtubeUrl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more YoutubeUrls and only return the `id`
     * const youtubeUrlWithIdOnly = await prisma.youtubeUrl.updateManyAndReturn({
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
    updateManyAndReturn<T extends YoutubeUrlUpdateManyAndReturnArgs>(args: SelectSubset<T, YoutubeUrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one YoutubeUrl.
     * @param {YoutubeUrlUpsertArgs} args - Arguments to update or create a YoutubeUrl.
     * @example
     * // Update or create a YoutubeUrl
     * const youtubeUrl = await prisma.youtubeUrl.upsert({
     *   create: {
     *     // ... data to create a YoutubeUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YoutubeUrl we want to update
     *   }
     * })
     */
    upsert<T extends YoutubeUrlUpsertArgs>(args: SelectSubset<T, YoutubeUrlUpsertArgs<ExtArgs>>): Prisma__YoutubeUrlClient<$Result.GetResult<Prisma.$YoutubeUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of YoutubeUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlCountArgs} args - Arguments to filter YoutubeUrls to count.
     * @example
     * // Count the number of YoutubeUrls
     * const count = await prisma.youtubeUrl.count({
     *   where: {
     *     // ... the filter for the YoutubeUrls we want to count
     *   }
     * })
    **/
    count<T extends YoutubeUrlCountArgs>(
      args?: Subset<T, YoutubeUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YoutubeUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YoutubeUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends YoutubeUrlAggregateArgs>(args: Subset<T, YoutubeUrlAggregateArgs>): Prisma.PrismaPromise<GetYoutubeUrlAggregateType<T>>

    /**
     * Group by YoutubeUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YoutubeUrlGroupByArgs} args - Group by arguments.
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
      T extends YoutubeUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YoutubeUrlGroupByArgs['orderBy'] }
        : { orderBy?: YoutubeUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, YoutubeUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYoutubeUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YoutubeUrl model
   */
  readonly fields: YoutubeUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YoutubeUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YoutubeUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blogPost<T extends YoutubeUrl$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, YoutubeUrl$blogPostArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teamMember<T extends YoutubeUrl$teamMemberArgs<ExtArgs> = {}>(args?: Subset<T, YoutubeUrl$teamMemberArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    newsUpdate<T extends YoutubeUrl$newsUpdateArgs<ExtArgs> = {}>(args?: Subset<T, YoutubeUrl$newsUpdateArgs<ExtArgs>>): Prisma__NewsUpdateClient<$Result.GetResult<Prisma.$NewsUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    successStory<T extends YoutubeUrl$successStoryArgs<ExtArgs> = {}>(args?: Subset<T, YoutubeUrl$successStoryArgs<ExtArgs>>): Prisma__SuccessStoryClient<$Result.GetResult<Prisma.$SuccessStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the YoutubeUrl model
   */
  interface YoutubeUrlFieldRefs {
    readonly id: FieldRef<"YoutubeUrl", 'String'>
    readonly url: FieldRef<"YoutubeUrl", 'String'>
    readonly title: FieldRef<"YoutubeUrl", 'String'>
    readonly createdAt: FieldRef<"YoutubeUrl", 'DateTime'>
    readonly updatedAt: FieldRef<"YoutubeUrl", 'DateTime'>
    readonly blogPostId: FieldRef<"YoutubeUrl", 'String'>
    readonly teamMemberId: FieldRef<"YoutubeUrl", 'String'>
    readonly newsUpdateId: FieldRef<"YoutubeUrl", 'String'>
    readonly successStoryId: FieldRef<"YoutubeUrl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * YoutubeUrl findUnique
   */
  export type YoutubeUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeUrl to fetch.
     */
    where: YoutubeUrlWhereUniqueInput
  }

  /**
   * YoutubeUrl findUniqueOrThrow
   */
  export type YoutubeUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeUrl to fetch.
     */
    where: YoutubeUrlWhereUniqueInput
  }

  /**
   * YoutubeUrl findFirst
   */
  export type YoutubeUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeUrl to fetch.
     */
    where?: YoutubeUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeUrls to fetch.
     */
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoutubeUrls.
     */
    cursor?: YoutubeUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoutubeUrls.
     */
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * YoutubeUrl findFirstOrThrow
   */
  export type YoutubeUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeUrl to fetch.
     */
    where?: YoutubeUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeUrls to fetch.
     */
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YoutubeUrls.
     */
    cursor?: YoutubeUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YoutubeUrls.
     */
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * YoutubeUrl findMany
   */
  export type YoutubeUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * Filter, which YoutubeUrls to fetch.
     */
    where?: YoutubeUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YoutubeUrls to fetch.
     */
    orderBy?: YoutubeUrlOrderByWithRelationInput | YoutubeUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YoutubeUrls.
     */
    cursor?: YoutubeUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YoutubeUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YoutubeUrls.
     */
    skip?: number
    distinct?: YoutubeUrlScalarFieldEnum | YoutubeUrlScalarFieldEnum[]
  }

  /**
   * YoutubeUrl create
   */
  export type YoutubeUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * The data needed to create a YoutubeUrl.
     */
    data: XOR<YoutubeUrlCreateInput, YoutubeUrlUncheckedCreateInput>
  }

  /**
   * YoutubeUrl createMany
   */
  export type YoutubeUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YoutubeUrls.
     */
    data: YoutubeUrlCreateManyInput | YoutubeUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * YoutubeUrl createManyAndReturn
   */
  export type YoutubeUrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * The data used to create many YoutubeUrls.
     */
    data: YoutubeUrlCreateManyInput | YoutubeUrlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * YoutubeUrl update
   */
  export type YoutubeUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * The data needed to update a YoutubeUrl.
     */
    data: XOR<YoutubeUrlUpdateInput, YoutubeUrlUncheckedUpdateInput>
    /**
     * Choose, which YoutubeUrl to update.
     */
    where: YoutubeUrlWhereUniqueInput
  }

  /**
   * YoutubeUrl updateMany
   */
  export type YoutubeUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YoutubeUrls.
     */
    data: XOR<YoutubeUrlUpdateManyMutationInput, YoutubeUrlUncheckedUpdateManyInput>
    /**
     * Filter which YoutubeUrls to update
     */
    where?: YoutubeUrlWhereInput
    /**
     * Limit how many YoutubeUrls to update.
     */
    limit?: number
  }

  /**
   * YoutubeUrl updateManyAndReturn
   */
  export type YoutubeUrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * The data used to update YoutubeUrls.
     */
    data: XOR<YoutubeUrlUpdateManyMutationInput, YoutubeUrlUncheckedUpdateManyInput>
    /**
     * Filter which YoutubeUrls to update
     */
    where?: YoutubeUrlWhereInput
    /**
     * Limit how many YoutubeUrls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * YoutubeUrl upsert
   */
  export type YoutubeUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * The filter to search for the YoutubeUrl to update in case it exists.
     */
    where: YoutubeUrlWhereUniqueInput
    /**
     * In case the YoutubeUrl found by the `where` argument doesn't exist, create a new YoutubeUrl with this data.
     */
    create: XOR<YoutubeUrlCreateInput, YoutubeUrlUncheckedCreateInput>
    /**
     * In case the YoutubeUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YoutubeUrlUpdateInput, YoutubeUrlUncheckedUpdateInput>
  }

  /**
   * YoutubeUrl delete
   */
  export type YoutubeUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
    /**
     * Filter which YoutubeUrl to delete.
     */
    where: YoutubeUrlWhereUniqueInput
  }

  /**
   * YoutubeUrl deleteMany
   */
  export type YoutubeUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YoutubeUrls to delete
     */
    where?: YoutubeUrlWhereInput
    /**
     * Limit how many YoutubeUrls to delete.
     */
    limit?: number
  }

  /**
   * YoutubeUrl.blogPost
   */
  export type YoutubeUrl$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
  }

  /**
   * YoutubeUrl.teamMember
   */
  export type YoutubeUrl$teamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
  }

  /**
   * YoutubeUrl.newsUpdate
   */
  export type YoutubeUrl$newsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsUpdate
     */
    select?: NewsUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsUpdate
     */
    omit?: NewsUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsUpdateInclude<ExtArgs> | null
    where?: NewsUpdateWhereInput
  }

  /**
   * YoutubeUrl.successStory
   */
  export type YoutubeUrl$successStoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuccessStory
     */
    select?: SuccessStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuccessStory
     */
    omit?: SuccessStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuccessStoryInclude<ExtArgs> | null
    where?: SuccessStoryWhereInput
  }

  /**
   * YoutubeUrl without action
   */
  export type YoutubeUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YoutubeUrl
     */
    select?: YoutubeUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the YoutubeUrl
     */
    omit?: YoutubeUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YoutubeUrlInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    banned: 'banned',
    banReason: 'banReason',
    banExpires: 'banExpires'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId',
    impersonatedBy: 'impersonatedBy'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    email: 'email',
    phone: 'phone',
    bio: 'bio',
    expertise: 'expertise',
    achievements: 'achievements',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const SuccessStoryScalarFieldEnum: {
    id: 'id',
    studentName: 'studentName',
    year: 'year',
    currentPosition: 'currentPosition',
    company: 'company',
    story: 'story',
    impact: 'impact',
    advice: 'advice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuccessStoryScalarFieldEnum = (typeof SuccessStoryScalarFieldEnum)[keyof typeof SuccessStoryScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    excerpt: 'excerpt',
    content: 'content',
    author: 'author',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const NewsUpdateScalarFieldEnum: {
    id: 'id',
    headline: 'headline',
    summary: 'summary',
    content: 'content',
    location: 'location',
    eventDate: 'eventDate',
    priority: 'priority',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsUpdateScalarFieldEnum = (typeof NewsUpdateScalarFieldEnum)[keyof typeof NewsUpdateScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    blogPostId: 'blogPostId',
    teamMemberId: 'teamMemberId',
    newsUpdateId: 'newsUpdateId',
    successStoryId: 'successStoryId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    blogPostId: 'blogPostId',
    teamMemberId: 'teamMemberId',
    newsUpdateId: 'newsUpdateId',
    successStoryId: 'successStoryId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const YoutubeUrlScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    blogPostId: 'blogPostId',
    teamMemberId: 'teamMemberId',
    newsUpdateId: 'newsUpdateId',
    successStoryId: 'successStoryId'
  };

  export type YoutubeUrlScalarFieldEnum = (typeof YoutubeUrlScalarFieldEnum)[keyof typeof YoutubeUrlScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'BlogCategory'
   */
  export type EnumBlogCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogCategory'>
    


  /**
   * Reference to a field of type 'BlogCategory[]'
   */
  export type ListEnumBlogCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BlogCategory[]'>
    


  /**
   * Reference to a field of type 'NewsPriority'
   */
  export type EnumNewsPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsPriority'>
    


  /**
   * Reference to a field of type 'NewsPriority[]'
   */
  export type ListEnumNewsPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsPriority[]'>
    


  /**
   * Reference to a field of type 'NewsCategory'
   */
  export type EnumNewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsCategory'>
    


  /**
   * Reference to a field of type 'NewsCategory[]'
   */
  export type ListEnumNewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsCategory[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableFilter<"User"> | string | null
    banned?: BoolNullableFilter<"User"> | boolean | null
    banReason?: StringNullableFilter<"User"> | string | null
    banExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrderInput | SortOrder
    banned?: SortOrderInput | SortOrder
    banReason?: SortOrderInput | SortOrder
    banExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    banned?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    banExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
    impersonatedBy?: StringNullableWithAggregatesFilter<"Session"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    name?: StringFilter<"TeamMember"> | string
    position?: StringFilter<"TeamMember"> | string
    email?: StringFilter<"TeamMember"> | string
    phone?: StringNullableFilter<"TeamMember"> | string | null
    bio?: StringFilter<"TeamMember"> | string
    expertise?: StringNullableFilter<"TeamMember"> | string | null
    achievements?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrder
    expertise?: SortOrderInput | SortOrder
    achievements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    youtubeUrls?: YoutubeUrlOrderByRelationAggregateInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    name?: StringFilter<"TeamMember"> | string
    position?: StringFilter<"TeamMember"> | string
    phone?: StringNullableFilter<"TeamMember"> | string | null
    bio?: StringFilter<"TeamMember"> | string
    expertise?: StringNullableFilter<"TeamMember"> | string | null
    achievements?: StringNullableFilter<"TeamMember"> | string | null
    createdAt?: DateTimeFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeFilter<"TeamMember"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }, "id" | "email">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    bio?: SortOrder
    expertise?: SortOrderInput | SortOrder
    achievements?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    name?: StringWithAggregatesFilter<"TeamMember"> | string
    position?: StringWithAggregatesFilter<"TeamMember"> | string
    email?: StringWithAggregatesFilter<"TeamMember"> | string
    phone?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    bio?: StringWithAggregatesFilter<"TeamMember"> | string
    expertise?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    achievements?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type SuccessStoryWhereInput = {
    AND?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    OR?: SuccessStoryWhereInput[]
    NOT?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    id?: StringFilter<"SuccessStory"> | string
    studentName?: StringFilter<"SuccessStory"> | string
    year?: IntFilter<"SuccessStory"> | number
    currentPosition?: StringFilter<"SuccessStory"> | string
    company?: StringFilter<"SuccessStory"> | string
    story?: StringFilter<"SuccessStory"> | string
    impact?: StringFilter<"SuccessStory"> | string
    advice?: StringNullableFilter<"SuccessStory"> | string | null
    createdAt?: DateTimeFilter<"SuccessStory"> | Date | string
    updatedAt?: DateTimeFilter<"SuccessStory"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }

  export type SuccessStoryOrderByWithRelationInput = {
    id?: SortOrder
    studentName?: SortOrder
    year?: SortOrder
    currentPosition?: SortOrder
    company?: SortOrder
    story?: SortOrder
    impact?: SortOrder
    advice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    youtubeUrls?: YoutubeUrlOrderByRelationAggregateInput
  }

  export type SuccessStoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    OR?: SuccessStoryWhereInput[]
    NOT?: SuccessStoryWhereInput | SuccessStoryWhereInput[]
    studentName?: StringFilter<"SuccessStory"> | string
    year?: IntFilter<"SuccessStory"> | number
    currentPosition?: StringFilter<"SuccessStory"> | string
    company?: StringFilter<"SuccessStory"> | string
    story?: StringFilter<"SuccessStory"> | string
    impact?: StringFilter<"SuccessStory"> | string
    advice?: StringNullableFilter<"SuccessStory"> | string | null
    createdAt?: DateTimeFilter<"SuccessStory"> | Date | string
    updatedAt?: DateTimeFilter<"SuccessStory"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }, "id">

  export type SuccessStoryOrderByWithAggregationInput = {
    id?: SortOrder
    studentName?: SortOrder
    year?: SortOrder
    currentPosition?: SortOrder
    company?: SortOrder
    story?: SortOrder
    impact?: SortOrder
    advice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuccessStoryCountOrderByAggregateInput
    _avg?: SuccessStoryAvgOrderByAggregateInput
    _max?: SuccessStoryMaxOrderByAggregateInput
    _min?: SuccessStoryMinOrderByAggregateInput
    _sum?: SuccessStorySumOrderByAggregateInput
  }

  export type SuccessStoryScalarWhereWithAggregatesInput = {
    AND?: SuccessStoryScalarWhereWithAggregatesInput | SuccessStoryScalarWhereWithAggregatesInput[]
    OR?: SuccessStoryScalarWhereWithAggregatesInput[]
    NOT?: SuccessStoryScalarWhereWithAggregatesInput | SuccessStoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuccessStory"> | string
    studentName?: StringWithAggregatesFilter<"SuccessStory"> | string
    year?: IntWithAggregatesFilter<"SuccessStory"> | number
    currentPosition?: StringWithAggregatesFilter<"SuccessStory"> | string
    company?: StringWithAggregatesFilter<"SuccessStory"> | string
    story?: StringWithAggregatesFilter<"SuccessStory"> | string
    impact?: StringWithAggregatesFilter<"SuccessStory"> | string
    advice?: StringNullableWithAggregatesFilter<"SuccessStory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SuccessStory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuccessStory"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    author?: StringFilter<"BlogPost"> | string
    category?: EnumBlogCategoryFilter<"BlogPost"> | $Enums.BlogCategory
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    youtubeUrls?: YoutubeUrlOrderByRelationAggregateInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    excerpt?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    author?: StringFilter<"BlogPost"> | string
    category?: EnumBlogCategoryFilter<"BlogPost"> | $Enums.BlogCategory
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }, "id" | "slug">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    author?: StringWithAggregatesFilter<"BlogPost"> | string
    category?: EnumBlogCategoryWithAggregatesFilter<"BlogPost"> | $Enums.BlogCategory
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type NewsUpdateWhereInput = {
    AND?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    OR?: NewsUpdateWhereInput[]
    NOT?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    id?: StringFilter<"NewsUpdate"> | string
    headline?: StringFilter<"NewsUpdate"> | string
    summary?: StringFilter<"NewsUpdate"> | string
    content?: StringFilter<"NewsUpdate"> | string
    location?: StringNullableFilter<"NewsUpdate"> | string | null
    eventDate?: DateTimeNullableFilter<"NewsUpdate"> | Date | string | null
    priority?: EnumNewsPriorityFilter<"NewsUpdate"> | $Enums.NewsPriority
    category?: EnumNewsCategoryFilter<"NewsUpdate"> | $Enums.NewsCategory
    createdAt?: DateTimeFilter<"NewsUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"NewsUpdate"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }

  export type NewsUpdateOrderByWithRelationInput = {
    id?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    location?: SortOrderInput | SortOrder
    eventDate?: SortOrderInput | SortOrder
    priority?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    youtubeUrls?: YoutubeUrlOrderByRelationAggregateInput
  }

  export type NewsUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    OR?: NewsUpdateWhereInput[]
    NOT?: NewsUpdateWhereInput | NewsUpdateWhereInput[]
    headline?: StringFilter<"NewsUpdate"> | string
    summary?: StringFilter<"NewsUpdate"> | string
    content?: StringFilter<"NewsUpdate"> | string
    location?: StringNullableFilter<"NewsUpdate"> | string | null
    eventDate?: DateTimeNullableFilter<"NewsUpdate"> | Date | string | null
    priority?: EnumNewsPriorityFilter<"NewsUpdate"> | $Enums.NewsPriority
    category?: EnumNewsCategoryFilter<"NewsUpdate"> | $Enums.NewsCategory
    createdAt?: DateTimeFilter<"NewsUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"NewsUpdate"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    youtubeUrls?: YoutubeUrlListRelationFilter
  }, "id">

  export type NewsUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    location?: SortOrderInput | SortOrder
    eventDate?: SortOrderInput | SortOrder
    priority?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsUpdateCountOrderByAggregateInput
    _max?: NewsUpdateMaxOrderByAggregateInput
    _min?: NewsUpdateMinOrderByAggregateInput
  }

  export type NewsUpdateScalarWhereWithAggregatesInput = {
    AND?: NewsUpdateScalarWhereWithAggregatesInput | NewsUpdateScalarWhereWithAggregatesInput[]
    OR?: NewsUpdateScalarWhereWithAggregatesInput[]
    NOT?: NewsUpdateScalarWhereWithAggregatesInput | NewsUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsUpdate"> | string
    headline?: StringWithAggregatesFilter<"NewsUpdate"> | string
    summary?: StringWithAggregatesFilter<"NewsUpdate"> | string
    content?: StringWithAggregatesFilter<"NewsUpdate"> | string
    location?: StringNullableWithAggregatesFilter<"NewsUpdate"> | string | null
    eventDate?: DateTimeNullableWithAggregatesFilter<"NewsUpdate"> | Date | string | null
    priority?: EnumNewsPriorityWithAggregatesFilter<"NewsUpdate"> | $Enums.NewsPriority
    category?: EnumNewsCategoryWithAggregatesFilter<"NewsUpdate"> | $Enums.NewsCategory
    createdAt?: DateTimeWithAggregatesFilter<"NewsUpdate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsUpdate"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    blogPostId?: StringNullableFilter<"Image"> | string | null
    teamMemberId?: StringNullableFilter<"Image"> | string | null
    newsUpdateId?: StringNullableFilter<"Image"> | string | null
    successStoryId?: StringNullableFilter<"Image"> | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
    teamMember?: XOR<TeamMemberNullableScalarRelationFilter, TeamMemberWhereInput> | null
    newsUpdate?: XOR<NewsUpdateNullableScalarRelationFilter, NewsUpdateWhereInput> | null
    successStory?: XOR<SuccessStoryNullableScalarRelationFilter, SuccessStoryWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrderInput | SortOrder
    teamMemberId?: SortOrderInput | SortOrder
    newsUpdateId?: SortOrderInput | SortOrder
    successStoryId?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    teamMember?: TeamMemberOrderByWithRelationInput
    newsUpdate?: NewsUpdateOrderByWithRelationInput
    successStory?: SuccessStoryOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    blogPostId?: StringNullableFilter<"Image"> | string | null
    teamMemberId?: StringNullableFilter<"Image"> | string | null
    newsUpdateId?: StringNullableFilter<"Image"> | string | null
    successStoryId?: StringNullableFilter<"Image"> | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
    teamMember?: XOR<TeamMemberNullableScalarRelationFilter, TeamMemberWhereInput> | null
    newsUpdate?: XOR<NewsUpdateNullableScalarRelationFilter, NewsUpdateWhereInput> | null
    successStory?: XOR<SuccessStoryNullableScalarRelationFilter, SuccessStoryWhereInput> | null
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrderInput | SortOrder
    teamMemberId?: SortOrderInput | SortOrder
    newsUpdateId?: SortOrderInput | SortOrder
    successStoryId?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    blogPostId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    teamMemberId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    newsUpdateId?: StringNullableWithAggregatesFilter<"Image"> | string | null
    successStoryId?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    title?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    blogPostId?: StringNullableFilter<"Video"> | string | null
    teamMemberId?: StringNullableFilter<"Video"> | string | null
    newsUpdateId?: StringNullableFilter<"Video"> | string | null
    successStoryId?: StringNullableFilter<"Video"> | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
    teamMember?: XOR<TeamMemberNullableScalarRelationFilter, TeamMemberWhereInput> | null
    newsUpdate?: XOR<NewsUpdateNullableScalarRelationFilter, NewsUpdateWhereInput> | null
    successStory?: XOR<SuccessStoryNullableScalarRelationFilter, SuccessStoryWhereInput> | null
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrderInput | SortOrder
    teamMemberId?: SortOrderInput | SortOrder
    newsUpdateId?: SortOrderInput | SortOrder
    successStoryId?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    teamMember?: TeamMemberOrderByWithRelationInput
    newsUpdate?: NewsUpdateOrderByWithRelationInput
    successStory?: SuccessStoryOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    url?: StringFilter<"Video"> | string
    title?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    blogPostId?: StringNullableFilter<"Video"> | string | null
    teamMemberId?: StringNullableFilter<"Video"> | string | null
    newsUpdateId?: StringNullableFilter<"Video"> | string | null
    successStoryId?: StringNullableFilter<"Video"> | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
    teamMember?: XOR<TeamMemberNullableScalarRelationFilter, TeamMemberWhereInput> | null
    newsUpdate?: XOR<NewsUpdateNullableScalarRelationFilter, NewsUpdateWhereInput> | null
    successStory?: XOR<SuccessStoryNullableScalarRelationFilter, SuccessStoryWhereInput> | null
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrderInput | SortOrder
    teamMemberId?: SortOrderInput | SortOrder
    newsUpdateId?: SortOrderInput | SortOrder
    successStoryId?: SortOrderInput | SortOrder
    _count?: VideoCountOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    url?: StringWithAggregatesFilter<"Video"> | string
    title?: StringNullableWithAggregatesFilter<"Video"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    blogPostId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    teamMemberId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    newsUpdateId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    successStoryId?: StringNullableWithAggregatesFilter<"Video"> | string | null
  }

  export type YoutubeUrlWhereInput = {
    AND?: YoutubeUrlWhereInput | YoutubeUrlWhereInput[]
    OR?: YoutubeUrlWhereInput[]
    NOT?: YoutubeUrlWhereInput | YoutubeUrlWhereInput[]
    id?: StringFilter<"YoutubeUrl"> | string
    url?: StringFilter<"YoutubeUrl"> | string
    title?: StringNullableFilter<"YoutubeUrl"> | string | null
    createdAt?: DateTimeFilter<"YoutubeUrl"> | Date | string
    updatedAt?: DateTimeFilter<"YoutubeUrl"> | Date | string
    blogPostId?: StringNullableFilter<"YoutubeUrl"> | string | null
    teamMemberId?: StringNullableFilter<"YoutubeUrl"> | string | null
    newsUpdateId?: StringNullableFilter<"YoutubeUrl"> | string | null
    successStoryId?: StringNullableFilter<"YoutubeUrl"> | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
    teamMember?: XOR<TeamMemberNullableScalarRelationFilter, TeamMemberWhereInput> | null
    newsUpdate?: XOR<NewsUpdateNullableScalarRelationFilter, NewsUpdateWhereInput> | null
    successStory?: XOR<SuccessStoryNullableScalarRelationFilter, SuccessStoryWhereInput> | null
  }

  export type YoutubeUrlOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrderInput | SortOrder
    teamMemberId?: SortOrderInput | SortOrder
    newsUpdateId?: SortOrderInput | SortOrder
    successStoryId?: SortOrderInput | SortOrder
    blogPost?: BlogPostOrderByWithRelationInput
    teamMember?: TeamMemberOrderByWithRelationInput
    newsUpdate?: NewsUpdateOrderByWithRelationInput
    successStory?: SuccessStoryOrderByWithRelationInput
  }

  export type YoutubeUrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: YoutubeUrlWhereInput | YoutubeUrlWhereInput[]
    OR?: YoutubeUrlWhereInput[]
    NOT?: YoutubeUrlWhereInput | YoutubeUrlWhereInput[]
    url?: StringFilter<"YoutubeUrl"> | string
    title?: StringNullableFilter<"YoutubeUrl"> | string | null
    createdAt?: DateTimeFilter<"YoutubeUrl"> | Date | string
    updatedAt?: DateTimeFilter<"YoutubeUrl"> | Date | string
    blogPostId?: StringNullableFilter<"YoutubeUrl"> | string | null
    teamMemberId?: StringNullableFilter<"YoutubeUrl"> | string | null
    newsUpdateId?: StringNullableFilter<"YoutubeUrl"> | string | null
    successStoryId?: StringNullableFilter<"YoutubeUrl"> | string | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
    teamMember?: XOR<TeamMemberNullableScalarRelationFilter, TeamMemberWhereInput> | null
    newsUpdate?: XOR<NewsUpdateNullableScalarRelationFilter, NewsUpdateWhereInput> | null
    successStory?: XOR<SuccessStoryNullableScalarRelationFilter, SuccessStoryWhereInput> | null
  }, "id">

  export type YoutubeUrlOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrderInput | SortOrder
    teamMemberId?: SortOrderInput | SortOrder
    newsUpdateId?: SortOrderInput | SortOrder
    successStoryId?: SortOrderInput | SortOrder
    _count?: YoutubeUrlCountOrderByAggregateInput
    _max?: YoutubeUrlMaxOrderByAggregateInput
    _min?: YoutubeUrlMinOrderByAggregateInput
  }

  export type YoutubeUrlScalarWhereWithAggregatesInput = {
    AND?: YoutubeUrlScalarWhereWithAggregatesInput | YoutubeUrlScalarWhereWithAggregatesInput[]
    OR?: YoutubeUrlScalarWhereWithAggregatesInput[]
    NOT?: YoutubeUrlScalarWhereWithAggregatesInput | YoutubeUrlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"YoutubeUrl"> | string
    url?: StringWithAggregatesFilter<"YoutubeUrl"> | string
    title?: StringNullableWithAggregatesFilter<"YoutubeUrl"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"YoutubeUrl"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YoutubeUrl"> | Date | string
    blogPostId?: StringNullableWithAggregatesFilter<"YoutubeUrl"> | string | null
    teamMemberId?: StringNullableWithAggregatesFilter<"YoutubeUrl"> | string | null
    newsUpdateId?: StringNullableWithAggregatesFilter<"YoutubeUrl"> | string | null
    successStoryId?: StringNullableWithAggregatesFilter<"YoutubeUrl"> | string | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
    impersonatedBy?: string | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutTeamMemberInput
    videos?: VideoCreateNestedManyWithoutTeamMemberInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutTeamMemberInput
    videos?: VideoUncheckedCreateNestedManyWithoutTeamMemberInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutTeamMemberNestedInput
    videos?: VideoUpdateManyWithoutTeamMemberNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutTeamMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutTeamMemberNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTeamMemberNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutTeamMemberNestedInput
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessStoryCreateInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutSuccessStoryInput
    videos?: VideoCreateNestedManyWithoutSuccessStoryInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryUncheckedCreateInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutSuccessStoryInput
    videos?: VideoUncheckedCreateNestedManyWithoutSuccessStoryInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutSuccessStoryNestedInput
    videos?: VideoUpdateManyWithoutSuccessStoryNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutSuccessStoryNestedInput
  }

  export type SuccessStoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutSuccessStoryNestedInput
    videos?: VideoUncheckedUpdateManyWithoutSuccessStoryNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutSuccessStoryNestedInput
  }

  export type SuccessStoryCreateManyInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuccessStoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuccessStoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutBlogPostInput
    videos?: VideoCreateNestedManyWithoutBlogPostInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutBlogPostInput
    videos?: VideoUncheckedCreateNestedManyWithoutBlogPostInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutBlogPostNestedInput
    videos?: VideoUpdateManyWithoutBlogPostNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutBlogPostNestedInput
    videos?: VideoUncheckedUpdateManyWithoutBlogPostNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostCreateManyInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateCreateInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutNewsUpdateInput
    videos?: VideoCreateNestedManyWithoutNewsUpdateInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateUncheckedCreateInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutNewsUpdateInput
    videos?: VideoUncheckedCreateNestedManyWithoutNewsUpdateInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutNewsUpdateNestedInput
    videos?: VideoUpdateManyWithoutNewsUpdateNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutNewsUpdateNestedInput
  }

  export type NewsUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutNewsUpdateNestedInput
    videos?: VideoUncheckedUpdateManyWithoutNewsUpdateNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutNewsUpdateNestedInput
  }

  export type NewsUpdateCreateManyInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutImagesInput
    teamMember?: TeamMemberCreateNestedOneWithoutImagesInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutImagesInput
    successStory?: SuccessStoryCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutImagesNestedInput
    teamMember?: TeamMemberUpdateOneWithoutImagesNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutImagesNestedInput
    successStory?: SuccessStoryUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCreateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutVideosInput
    teamMember?: TeamMemberCreateNestedOneWithoutVideosInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutVideosInput
    successStory?: SuccessStoryCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutVideosNestedInput
    teamMember?: TeamMemberUpdateOneWithoutVideosNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutVideosNestedInput
    successStory?: SuccessStoryUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlCreateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutYoutubeUrlsInput
    teamMember?: TeamMemberCreateNestedOneWithoutYoutubeUrlsInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutYoutubeUrlsInput
    successStory?: SuccessStoryCreateNestedOneWithoutYoutubeUrlsInput
  }

  export type YoutubeUrlUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutYoutubeUrlsNestedInput
    teamMember?: TeamMemberUpdateOneWithoutYoutubeUrlsNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutYoutubeUrlsNestedInput
    successStory?: SuccessStoryUpdateOneWithoutYoutubeUrlsNestedInput
  }

  export type YoutubeUrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YoutubeUrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    banned?: SortOrder
    banReason?: SortOrder
    banExpires?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
    impersonatedBy?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type YoutubeUrlListRelationFilter = {
    every?: YoutubeUrlWhereInput
    some?: YoutubeUrlWhereInput
    none?: YoutubeUrlWhereInput
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YoutubeUrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    expertise?: SortOrder
    achievements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    expertise?: SortOrder
    achievements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    expertise?: SortOrder
    achievements?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SuccessStoryCountOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    year?: SortOrder
    currentPosition?: SortOrder
    company?: SortOrder
    story?: SortOrder
    impact?: SortOrder
    advice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessStoryAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type SuccessStoryMaxOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    year?: SortOrder
    currentPosition?: SortOrder
    company?: SortOrder
    story?: SortOrder
    impact?: SortOrder
    advice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessStoryMinOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    year?: SortOrder
    currentPosition?: SortOrder
    company?: SortOrder
    story?: SortOrder
    impact?: SortOrder
    advice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuccessStorySumOrderByAggregateInput = {
    year?: SortOrder
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

  export type EnumBlogCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryFilter<$PrismaModel> | $Enums.BlogCategory
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    author?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBlogCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BlogCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogCategoryFilter<$PrismaModel>
    _max?: NestedEnumBlogCategoryFilter<$PrismaModel>
  }

  export type EnumNewsPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsPriority | EnumNewsPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsPriorityFilter<$PrismaModel> | $Enums.NewsPriority
  }

  export type EnumNewsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsCategoryFilter<$PrismaModel> | $Enums.NewsCategory
  }

  export type NewsUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    priority?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    priority?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    content?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    priority?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNewsPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsPriority | EnumNewsPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsPriorityWithAggregatesFilter<$PrismaModel> | $Enums.NewsPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsPriorityFilter<$PrismaModel>
    _max?: NestedEnumNewsPriorityFilter<$PrismaModel>
  }

  export type EnumNewsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NewsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsCategoryFilter<$PrismaModel>
    _max?: NestedEnumNewsCategoryFilter<$PrismaModel>
  }

  export type BlogPostNullableScalarRelationFilter = {
    is?: BlogPostWhereInput | null
    isNot?: BlogPostWhereInput | null
  }

  export type TeamMemberNullableScalarRelationFilter = {
    is?: TeamMemberWhereInput | null
    isNot?: TeamMemberWhereInput | null
  }

  export type NewsUpdateNullableScalarRelationFilter = {
    is?: NewsUpdateWhereInput | null
    isNot?: NewsUpdateWhereInput | null
  }

  export type SuccessStoryNullableScalarRelationFilter = {
    is?: SuccessStoryWhereInput | null
    isNot?: SuccessStoryWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type YoutubeUrlCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type YoutubeUrlMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type YoutubeUrlMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blogPostId?: SortOrder
    teamMemberId?: SortOrder
    newsUpdateId?: SortOrder
    successStoryId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type ImageCreateNestedManyWithoutTeamMemberInput = {
    create?: XOR<ImageCreateWithoutTeamMemberInput, ImageUncheckedCreateWithoutTeamMemberInput> | ImageCreateWithoutTeamMemberInput[] | ImageUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTeamMemberInput | ImageCreateOrConnectWithoutTeamMemberInput[]
    createMany?: ImageCreateManyTeamMemberInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutTeamMemberInput = {
    create?: XOR<VideoCreateWithoutTeamMemberInput, VideoUncheckedCreateWithoutTeamMemberInput> | VideoCreateWithoutTeamMemberInput[] | VideoUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTeamMemberInput | VideoCreateOrConnectWithoutTeamMemberInput[]
    createMany?: VideoCreateManyTeamMemberInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlCreateNestedManyWithoutTeamMemberInput = {
    create?: XOR<YoutubeUrlCreateWithoutTeamMemberInput, YoutubeUrlUncheckedCreateWithoutTeamMemberInput> | YoutubeUrlCreateWithoutTeamMemberInput[] | YoutubeUrlUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutTeamMemberInput | YoutubeUrlCreateOrConnectWithoutTeamMemberInput[]
    createMany?: YoutubeUrlCreateManyTeamMemberInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutTeamMemberInput = {
    create?: XOR<ImageCreateWithoutTeamMemberInput, ImageUncheckedCreateWithoutTeamMemberInput> | ImageCreateWithoutTeamMemberInput[] | ImageUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTeamMemberInput | ImageCreateOrConnectWithoutTeamMemberInput[]
    createMany?: ImageCreateManyTeamMemberInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutTeamMemberInput = {
    create?: XOR<VideoCreateWithoutTeamMemberInput, VideoUncheckedCreateWithoutTeamMemberInput> | VideoCreateWithoutTeamMemberInput[] | VideoUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTeamMemberInput | VideoCreateOrConnectWithoutTeamMemberInput[]
    createMany?: VideoCreateManyTeamMemberInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlUncheckedCreateNestedManyWithoutTeamMemberInput = {
    create?: XOR<YoutubeUrlCreateWithoutTeamMemberInput, YoutubeUrlUncheckedCreateWithoutTeamMemberInput> | YoutubeUrlCreateWithoutTeamMemberInput[] | YoutubeUrlUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutTeamMemberInput | YoutubeUrlCreateOrConnectWithoutTeamMemberInput[]
    createMany?: YoutubeUrlCreateManyTeamMemberInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type ImageUpdateManyWithoutTeamMemberNestedInput = {
    create?: XOR<ImageCreateWithoutTeamMemberInput, ImageUncheckedCreateWithoutTeamMemberInput> | ImageCreateWithoutTeamMemberInput[] | ImageUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTeamMemberInput | ImageCreateOrConnectWithoutTeamMemberInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTeamMemberInput | ImageUpsertWithWhereUniqueWithoutTeamMemberInput[]
    createMany?: ImageCreateManyTeamMemberInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTeamMemberInput | ImageUpdateWithWhereUniqueWithoutTeamMemberInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTeamMemberInput | ImageUpdateManyWithWhereWithoutTeamMemberInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutTeamMemberNestedInput = {
    create?: XOR<VideoCreateWithoutTeamMemberInput, VideoUncheckedCreateWithoutTeamMemberInput> | VideoCreateWithoutTeamMemberInput[] | VideoUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTeamMemberInput | VideoCreateOrConnectWithoutTeamMemberInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutTeamMemberInput | VideoUpsertWithWhereUniqueWithoutTeamMemberInput[]
    createMany?: VideoCreateManyTeamMemberInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutTeamMemberInput | VideoUpdateWithWhereUniqueWithoutTeamMemberInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutTeamMemberInput | VideoUpdateManyWithWhereWithoutTeamMemberInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUpdateManyWithoutTeamMemberNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutTeamMemberInput, YoutubeUrlUncheckedCreateWithoutTeamMemberInput> | YoutubeUrlCreateWithoutTeamMemberInput[] | YoutubeUrlUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutTeamMemberInput | YoutubeUrlCreateOrConnectWithoutTeamMemberInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutTeamMemberInput | YoutubeUrlUpsertWithWhereUniqueWithoutTeamMemberInput[]
    createMany?: YoutubeUrlCreateManyTeamMemberInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutTeamMemberInput | YoutubeUrlUpdateWithWhereUniqueWithoutTeamMemberInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutTeamMemberInput | YoutubeUrlUpdateManyWithWhereWithoutTeamMemberInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutTeamMemberNestedInput = {
    create?: XOR<ImageCreateWithoutTeamMemberInput, ImageUncheckedCreateWithoutTeamMemberInput> | ImageCreateWithoutTeamMemberInput[] | ImageUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutTeamMemberInput | ImageCreateOrConnectWithoutTeamMemberInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutTeamMemberInput | ImageUpsertWithWhereUniqueWithoutTeamMemberInput[]
    createMany?: ImageCreateManyTeamMemberInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutTeamMemberInput | ImageUpdateWithWhereUniqueWithoutTeamMemberInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutTeamMemberInput | ImageUpdateManyWithWhereWithoutTeamMemberInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutTeamMemberNestedInput = {
    create?: XOR<VideoCreateWithoutTeamMemberInput, VideoUncheckedCreateWithoutTeamMemberInput> | VideoCreateWithoutTeamMemberInput[] | VideoUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTeamMemberInput | VideoCreateOrConnectWithoutTeamMemberInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutTeamMemberInput | VideoUpsertWithWhereUniqueWithoutTeamMemberInput[]
    createMany?: VideoCreateManyTeamMemberInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutTeamMemberInput | VideoUpdateWithWhereUniqueWithoutTeamMemberInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutTeamMemberInput | VideoUpdateManyWithWhereWithoutTeamMemberInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutTeamMemberNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutTeamMemberInput, YoutubeUrlUncheckedCreateWithoutTeamMemberInput> | YoutubeUrlCreateWithoutTeamMemberInput[] | YoutubeUrlUncheckedCreateWithoutTeamMemberInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutTeamMemberInput | YoutubeUrlCreateOrConnectWithoutTeamMemberInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutTeamMemberInput | YoutubeUrlUpsertWithWhereUniqueWithoutTeamMemberInput[]
    createMany?: YoutubeUrlCreateManyTeamMemberInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutTeamMemberInput | YoutubeUrlUpdateWithWhereUniqueWithoutTeamMemberInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutTeamMemberInput | YoutubeUrlUpdateManyWithWhereWithoutTeamMemberInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutSuccessStoryInput = {
    create?: XOR<ImageCreateWithoutSuccessStoryInput, ImageUncheckedCreateWithoutSuccessStoryInput> | ImageCreateWithoutSuccessStoryInput[] | ImageUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuccessStoryInput | ImageCreateOrConnectWithoutSuccessStoryInput[]
    createMany?: ImageCreateManySuccessStoryInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutSuccessStoryInput = {
    create?: XOR<VideoCreateWithoutSuccessStoryInput, VideoUncheckedCreateWithoutSuccessStoryInput> | VideoCreateWithoutSuccessStoryInput[] | VideoUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSuccessStoryInput | VideoCreateOrConnectWithoutSuccessStoryInput[]
    createMany?: VideoCreateManySuccessStoryInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlCreateNestedManyWithoutSuccessStoryInput = {
    create?: XOR<YoutubeUrlCreateWithoutSuccessStoryInput, YoutubeUrlUncheckedCreateWithoutSuccessStoryInput> | YoutubeUrlCreateWithoutSuccessStoryInput[] | YoutubeUrlUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutSuccessStoryInput | YoutubeUrlCreateOrConnectWithoutSuccessStoryInput[]
    createMany?: YoutubeUrlCreateManySuccessStoryInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutSuccessStoryInput = {
    create?: XOR<ImageCreateWithoutSuccessStoryInput, ImageUncheckedCreateWithoutSuccessStoryInput> | ImageCreateWithoutSuccessStoryInput[] | ImageUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuccessStoryInput | ImageCreateOrConnectWithoutSuccessStoryInput[]
    createMany?: ImageCreateManySuccessStoryInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutSuccessStoryInput = {
    create?: XOR<VideoCreateWithoutSuccessStoryInput, VideoUncheckedCreateWithoutSuccessStoryInput> | VideoCreateWithoutSuccessStoryInput[] | VideoUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSuccessStoryInput | VideoCreateOrConnectWithoutSuccessStoryInput[]
    createMany?: VideoCreateManySuccessStoryInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlUncheckedCreateNestedManyWithoutSuccessStoryInput = {
    create?: XOR<YoutubeUrlCreateWithoutSuccessStoryInput, YoutubeUrlUncheckedCreateWithoutSuccessStoryInput> | YoutubeUrlCreateWithoutSuccessStoryInput[] | YoutubeUrlUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutSuccessStoryInput | YoutubeUrlCreateOrConnectWithoutSuccessStoryInput[]
    createMany?: YoutubeUrlCreateManySuccessStoryInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ImageUpdateManyWithoutSuccessStoryNestedInput = {
    create?: XOR<ImageCreateWithoutSuccessStoryInput, ImageUncheckedCreateWithoutSuccessStoryInput> | ImageCreateWithoutSuccessStoryInput[] | ImageUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuccessStoryInput | ImageCreateOrConnectWithoutSuccessStoryInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSuccessStoryInput | ImageUpsertWithWhereUniqueWithoutSuccessStoryInput[]
    createMany?: ImageCreateManySuccessStoryInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSuccessStoryInput | ImageUpdateWithWhereUniqueWithoutSuccessStoryInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSuccessStoryInput | ImageUpdateManyWithWhereWithoutSuccessStoryInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutSuccessStoryNestedInput = {
    create?: XOR<VideoCreateWithoutSuccessStoryInput, VideoUncheckedCreateWithoutSuccessStoryInput> | VideoCreateWithoutSuccessStoryInput[] | VideoUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSuccessStoryInput | VideoCreateOrConnectWithoutSuccessStoryInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutSuccessStoryInput | VideoUpsertWithWhereUniqueWithoutSuccessStoryInput[]
    createMany?: VideoCreateManySuccessStoryInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutSuccessStoryInput | VideoUpdateWithWhereUniqueWithoutSuccessStoryInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutSuccessStoryInput | VideoUpdateManyWithWhereWithoutSuccessStoryInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUpdateManyWithoutSuccessStoryNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutSuccessStoryInput, YoutubeUrlUncheckedCreateWithoutSuccessStoryInput> | YoutubeUrlCreateWithoutSuccessStoryInput[] | YoutubeUrlUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutSuccessStoryInput | YoutubeUrlCreateOrConnectWithoutSuccessStoryInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutSuccessStoryInput | YoutubeUrlUpsertWithWhereUniqueWithoutSuccessStoryInput[]
    createMany?: YoutubeUrlCreateManySuccessStoryInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutSuccessStoryInput | YoutubeUrlUpdateWithWhereUniqueWithoutSuccessStoryInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutSuccessStoryInput | YoutubeUrlUpdateManyWithWhereWithoutSuccessStoryInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutSuccessStoryNestedInput = {
    create?: XOR<ImageCreateWithoutSuccessStoryInput, ImageUncheckedCreateWithoutSuccessStoryInput> | ImageCreateWithoutSuccessStoryInput[] | ImageUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSuccessStoryInput | ImageCreateOrConnectWithoutSuccessStoryInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSuccessStoryInput | ImageUpsertWithWhereUniqueWithoutSuccessStoryInput[]
    createMany?: ImageCreateManySuccessStoryInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSuccessStoryInput | ImageUpdateWithWhereUniqueWithoutSuccessStoryInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSuccessStoryInput | ImageUpdateManyWithWhereWithoutSuccessStoryInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutSuccessStoryNestedInput = {
    create?: XOR<VideoCreateWithoutSuccessStoryInput, VideoUncheckedCreateWithoutSuccessStoryInput> | VideoCreateWithoutSuccessStoryInput[] | VideoUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutSuccessStoryInput | VideoCreateOrConnectWithoutSuccessStoryInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutSuccessStoryInput | VideoUpsertWithWhereUniqueWithoutSuccessStoryInput[]
    createMany?: VideoCreateManySuccessStoryInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutSuccessStoryInput | VideoUpdateWithWhereUniqueWithoutSuccessStoryInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutSuccessStoryInput | VideoUpdateManyWithWhereWithoutSuccessStoryInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutSuccessStoryNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutSuccessStoryInput, YoutubeUrlUncheckedCreateWithoutSuccessStoryInput> | YoutubeUrlCreateWithoutSuccessStoryInput[] | YoutubeUrlUncheckedCreateWithoutSuccessStoryInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutSuccessStoryInput | YoutubeUrlCreateOrConnectWithoutSuccessStoryInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutSuccessStoryInput | YoutubeUrlUpsertWithWhereUniqueWithoutSuccessStoryInput[]
    createMany?: YoutubeUrlCreateManySuccessStoryInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutSuccessStoryInput | YoutubeUrlUpdateWithWhereUniqueWithoutSuccessStoryInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutSuccessStoryInput | YoutubeUrlUpdateManyWithWhereWithoutSuccessStoryInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<ImageCreateWithoutBlogPostInput, ImageUncheckedCreateWithoutBlogPostInput> | ImageCreateWithoutBlogPostInput[] | ImageUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBlogPostInput | ImageCreateOrConnectWithoutBlogPostInput[]
    createMany?: ImageCreateManyBlogPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<VideoCreateWithoutBlogPostInput, VideoUncheckedCreateWithoutBlogPostInput> | VideoCreateWithoutBlogPostInput[] | VideoUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutBlogPostInput | VideoCreateOrConnectWithoutBlogPostInput[]
    createMany?: VideoCreateManyBlogPostInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<YoutubeUrlCreateWithoutBlogPostInput, YoutubeUrlUncheckedCreateWithoutBlogPostInput> | YoutubeUrlCreateWithoutBlogPostInput[] | YoutubeUrlUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutBlogPostInput | YoutubeUrlCreateOrConnectWithoutBlogPostInput[]
    createMany?: YoutubeUrlCreateManyBlogPostInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<ImageCreateWithoutBlogPostInput, ImageUncheckedCreateWithoutBlogPostInput> | ImageCreateWithoutBlogPostInput[] | ImageUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBlogPostInput | ImageCreateOrConnectWithoutBlogPostInput[]
    createMany?: ImageCreateManyBlogPostInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<VideoCreateWithoutBlogPostInput, VideoUncheckedCreateWithoutBlogPostInput> | VideoCreateWithoutBlogPostInput[] | VideoUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutBlogPostInput | VideoCreateOrConnectWithoutBlogPostInput[]
    createMany?: VideoCreateManyBlogPostInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlUncheckedCreateNestedManyWithoutBlogPostInput = {
    create?: XOR<YoutubeUrlCreateWithoutBlogPostInput, YoutubeUrlUncheckedCreateWithoutBlogPostInput> | YoutubeUrlCreateWithoutBlogPostInput[] | YoutubeUrlUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutBlogPostInput | YoutubeUrlCreateOrConnectWithoutBlogPostInput[]
    createMany?: YoutubeUrlCreateManyBlogPostInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type EnumBlogCategoryFieldUpdateOperationsInput = {
    set?: $Enums.BlogCategory
  }

  export type ImageUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<ImageCreateWithoutBlogPostInput, ImageUncheckedCreateWithoutBlogPostInput> | ImageCreateWithoutBlogPostInput[] | ImageUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBlogPostInput | ImageCreateOrConnectWithoutBlogPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutBlogPostInput | ImageUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: ImageCreateManyBlogPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutBlogPostInput | ImageUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutBlogPostInput | ImageUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<VideoCreateWithoutBlogPostInput, VideoUncheckedCreateWithoutBlogPostInput> | VideoCreateWithoutBlogPostInput[] | VideoUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutBlogPostInput | VideoCreateOrConnectWithoutBlogPostInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutBlogPostInput | VideoUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: VideoCreateManyBlogPostInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutBlogPostInput | VideoUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutBlogPostInput | VideoUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutBlogPostInput, YoutubeUrlUncheckedCreateWithoutBlogPostInput> | YoutubeUrlCreateWithoutBlogPostInput[] | YoutubeUrlUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutBlogPostInput | YoutubeUrlCreateOrConnectWithoutBlogPostInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutBlogPostInput | YoutubeUrlUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: YoutubeUrlCreateManyBlogPostInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutBlogPostInput | YoutubeUrlUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutBlogPostInput | YoutubeUrlUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<ImageCreateWithoutBlogPostInput, ImageUncheckedCreateWithoutBlogPostInput> | ImageCreateWithoutBlogPostInput[] | ImageUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutBlogPostInput | ImageCreateOrConnectWithoutBlogPostInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutBlogPostInput | ImageUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: ImageCreateManyBlogPostInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutBlogPostInput | ImageUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutBlogPostInput | ImageUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<VideoCreateWithoutBlogPostInput, VideoUncheckedCreateWithoutBlogPostInput> | VideoCreateWithoutBlogPostInput[] | VideoUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutBlogPostInput | VideoCreateOrConnectWithoutBlogPostInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutBlogPostInput | VideoUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: VideoCreateManyBlogPostInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutBlogPostInput | VideoUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutBlogPostInput | VideoUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutBlogPostNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutBlogPostInput, YoutubeUrlUncheckedCreateWithoutBlogPostInput> | YoutubeUrlCreateWithoutBlogPostInput[] | YoutubeUrlUncheckedCreateWithoutBlogPostInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutBlogPostInput | YoutubeUrlCreateOrConnectWithoutBlogPostInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutBlogPostInput | YoutubeUrlUpsertWithWhereUniqueWithoutBlogPostInput[]
    createMany?: YoutubeUrlCreateManyBlogPostInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutBlogPostInput | YoutubeUrlUpdateWithWhereUniqueWithoutBlogPostInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutBlogPostInput | YoutubeUrlUpdateManyWithWhereWithoutBlogPostInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageCreateNestedManyWithoutNewsUpdateInput = {
    create?: XOR<ImageCreateWithoutNewsUpdateInput, ImageUncheckedCreateWithoutNewsUpdateInput> | ImageCreateWithoutNewsUpdateInput[] | ImageUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutNewsUpdateInput | ImageCreateOrConnectWithoutNewsUpdateInput[]
    createMany?: ImageCreateManyNewsUpdateInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutNewsUpdateInput = {
    create?: XOR<VideoCreateWithoutNewsUpdateInput, VideoUncheckedCreateWithoutNewsUpdateInput> | VideoCreateWithoutNewsUpdateInput[] | VideoUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNewsUpdateInput | VideoCreateOrConnectWithoutNewsUpdateInput[]
    createMany?: VideoCreateManyNewsUpdateInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlCreateNestedManyWithoutNewsUpdateInput = {
    create?: XOR<YoutubeUrlCreateWithoutNewsUpdateInput, YoutubeUrlUncheckedCreateWithoutNewsUpdateInput> | YoutubeUrlCreateWithoutNewsUpdateInput[] | YoutubeUrlUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutNewsUpdateInput | YoutubeUrlCreateOrConnectWithoutNewsUpdateInput[]
    createMany?: YoutubeUrlCreateManyNewsUpdateInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutNewsUpdateInput = {
    create?: XOR<ImageCreateWithoutNewsUpdateInput, ImageUncheckedCreateWithoutNewsUpdateInput> | ImageCreateWithoutNewsUpdateInput[] | ImageUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutNewsUpdateInput | ImageCreateOrConnectWithoutNewsUpdateInput[]
    createMany?: ImageCreateManyNewsUpdateInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutNewsUpdateInput = {
    create?: XOR<VideoCreateWithoutNewsUpdateInput, VideoUncheckedCreateWithoutNewsUpdateInput> | VideoCreateWithoutNewsUpdateInput[] | VideoUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNewsUpdateInput | VideoCreateOrConnectWithoutNewsUpdateInput[]
    createMany?: VideoCreateManyNewsUpdateInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type YoutubeUrlUncheckedCreateNestedManyWithoutNewsUpdateInput = {
    create?: XOR<YoutubeUrlCreateWithoutNewsUpdateInput, YoutubeUrlUncheckedCreateWithoutNewsUpdateInput> | YoutubeUrlCreateWithoutNewsUpdateInput[] | YoutubeUrlUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutNewsUpdateInput | YoutubeUrlCreateOrConnectWithoutNewsUpdateInput[]
    createMany?: YoutubeUrlCreateManyNewsUpdateInputEnvelope
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
  }

  export type EnumNewsPriorityFieldUpdateOperationsInput = {
    set?: $Enums.NewsPriority
  }

  export type EnumNewsCategoryFieldUpdateOperationsInput = {
    set?: $Enums.NewsCategory
  }

  export type ImageUpdateManyWithoutNewsUpdateNestedInput = {
    create?: XOR<ImageCreateWithoutNewsUpdateInput, ImageUncheckedCreateWithoutNewsUpdateInput> | ImageCreateWithoutNewsUpdateInput[] | ImageUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutNewsUpdateInput | ImageCreateOrConnectWithoutNewsUpdateInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutNewsUpdateInput | ImageUpsertWithWhereUniqueWithoutNewsUpdateInput[]
    createMany?: ImageCreateManyNewsUpdateInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutNewsUpdateInput | ImageUpdateWithWhereUniqueWithoutNewsUpdateInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutNewsUpdateInput | ImageUpdateManyWithWhereWithoutNewsUpdateInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutNewsUpdateNestedInput = {
    create?: XOR<VideoCreateWithoutNewsUpdateInput, VideoUncheckedCreateWithoutNewsUpdateInput> | VideoCreateWithoutNewsUpdateInput[] | VideoUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNewsUpdateInput | VideoCreateOrConnectWithoutNewsUpdateInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutNewsUpdateInput | VideoUpsertWithWhereUniqueWithoutNewsUpdateInput[]
    createMany?: VideoCreateManyNewsUpdateInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutNewsUpdateInput | VideoUpdateWithWhereUniqueWithoutNewsUpdateInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutNewsUpdateInput | VideoUpdateManyWithWhereWithoutNewsUpdateInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUpdateManyWithoutNewsUpdateNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutNewsUpdateInput, YoutubeUrlUncheckedCreateWithoutNewsUpdateInput> | YoutubeUrlCreateWithoutNewsUpdateInput[] | YoutubeUrlUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutNewsUpdateInput | YoutubeUrlCreateOrConnectWithoutNewsUpdateInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutNewsUpdateInput | YoutubeUrlUpsertWithWhereUniqueWithoutNewsUpdateInput[]
    createMany?: YoutubeUrlCreateManyNewsUpdateInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutNewsUpdateInput | YoutubeUrlUpdateWithWhereUniqueWithoutNewsUpdateInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutNewsUpdateInput | YoutubeUrlUpdateManyWithWhereWithoutNewsUpdateInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutNewsUpdateNestedInput = {
    create?: XOR<ImageCreateWithoutNewsUpdateInput, ImageUncheckedCreateWithoutNewsUpdateInput> | ImageCreateWithoutNewsUpdateInput[] | ImageUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutNewsUpdateInput | ImageCreateOrConnectWithoutNewsUpdateInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutNewsUpdateInput | ImageUpsertWithWhereUniqueWithoutNewsUpdateInput[]
    createMany?: ImageCreateManyNewsUpdateInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutNewsUpdateInput | ImageUpdateWithWhereUniqueWithoutNewsUpdateInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutNewsUpdateInput | ImageUpdateManyWithWhereWithoutNewsUpdateInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutNewsUpdateNestedInput = {
    create?: XOR<VideoCreateWithoutNewsUpdateInput, VideoUncheckedCreateWithoutNewsUpdateInput> | VideoCreateWithoutNewsUpdateInput[] | VideoUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutNewsUpdateInput | VideoCreateOrConnectWithoutNewsUpdateInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutNewsUpdateInput | VideoUpsertWithWhereUniqueWithoutNewsUpdateInput[]
    createMany?: VideoCreateManyNewsUpdateInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutNewsUpdateInput | VideoUpdateWithWhereUniqueWithoutNewsUpdateInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutNewsUpdateInput | VideoUpdateManyWithWhereWithoutNewsUpdateInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutNewsUpdateNestedInput = {
    create?: XOR<YoutubeUrlCreateWithoutNewsUpdateInput, YoutubeUrlUncheckedCreateWithoutNewsUpdateInput> | YoutubeUrlCreateWithoutNewsUpdateInput[] | YoutubeUrlUncheckedCreateWithoutNewsUpdateInput[]
    connectOrCreate?: YoutubeUrlCreateOrConnectWithoutNewsUpdateInput | YoutubeUrlCreateOrConnectWithoutNewsUpdateInput[]
    upsert?: YoutubeUrlUpsertWithWhereUniqueWithoutNewsUpdateInput | YoutubeUrlUpsertWithWhereUniqueWithoutNewsUpdateInput[]
    createMany?: YoutubeUrlCreateManyNewsUpdateInputEnvelope
    set?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    disconnect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    delete?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    connect?: YoutubeUrlWhereUniqueInput | YoutubeUrlWhereUniqueInput[]
    update?: YoutubeUrlUpdateWithWhereUniqueWithoutNewsUpdateInput | YoutubeUrlUpdateWithWhereUniqueWithoutNewsUpdateInput[]
    updateMany?: YoutubeUrlUpdateManyWithWhereWithoutNewsUpdateInput | YoutubeUrlUpdateManyWithWhereWithoutNewsUpdateInput[]
    deleteMany?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
  }

  export type BlogPostCreateNestedOneWithoutImagesInput = {
    create?: XOR<BlogPostCreateWithoutImagesInput, BlogPostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutImagesInput
    connect?: BlogPostWhereUniqueInput
  }

  export type TeamMemberCreateNestedOneWithoutImagesInput = {
    create?: XOR<TeamMemberCreateWithoutImagesInput, TeamMemberUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutImagesInput
    connect?: TeamMemberWhereUniqueInput
  }

  export type NewsUpdateCreateNestedOneWithoutImagesInput = {
    create?: XOR<NewsUpdateCreateWithoutImagesInput, NewsUpdateUncheckedCreateWithoutImagesInput>
    connectOrCreate?: NewsUpdateCreateOrConnectWithoutImagesInput
    connect?: NewsUpdateWhereUniqueInput
  }

  export type SuccessStoryCreateNestedOneWithoutImagesInput = {
    create?: XOR<SuccessStoryCreateWithoutImagesInput, SuccessStoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SuccessStoryCreateOrConnectWithoutImagesInput
    connect?: SuccessStoryWhereUniqueInput
  }

  export type BlogPostUpdateOneWithoutImagesNestedInput = {
    create?: XOR<BlogPostCreateWithoutImagesInput, BlogPostUncheckedCreateWithoutImagesInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutImagesInput
    upsert?: BlogPostUpsertWithoutImagesInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutImagesInput, BlogPostUpdateWithoutImagesInput>, BlogPostUncheckedUpdateWithoutImagesInput>
  }

  export type TeamMemberUpdateOneWithoutImagesNestedInput = {
    create?: XOR<TeamMemberCreateWithoutImagesInput, TeamMemberUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutImagesInput
    upsert?: TeamMemberUpsertWithoutImagesInput
    disconnect?: TeamMemberWhereInput | boolean
    delete?: TeamMemberWhereInput | boolean
    connect?: TeamMemberWhereUniqueInput
    update?: XOR<XOR<TeamMemberUpdateToOneWithWhereWithoutImagesInput, TeamMemberUpdateWithoutImagesInput>, TeamMemberUncheckedUpdateWithoutImagesInput>
  }

  export type NewsUpdateUpdateOneWithoutImagesNestedInput = {
    create?: XOR<NewsUpdateCreateWithoutImagesInput, NewsUpdateUncheckedCreateWithoutImagesInput>
    connectOrCreate?: NewsUpdateCreateOrConnectWithoutImagesInput
    upsert?: NewsUpdateUpsertWithoutImagesInput
    disconnect?: NewsUpdateWhereInput | boolean
    delete?: NewsUpdateWhereInput | boolean
    connect?: NewsUpdateWhereUniqueInput
    update?: XOR<XOR<NewsUpdateUpdateToOneWithWhereWithoutImagesInput, NewsUpdateUpdateWithoutImagesInput>, NewsUpdateUncheckedUpdateWithoutImagesInput>
  }

  export type SuccessStoryUpdateOneWithoutImagesNestedInput = {
    create?: XOR<SuccessStoryCreateWithoutImagesInput, SuccessStoryUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SuccessStoryCreateOrConnectWithoutImagesInput
    upsert?: SuccessStoryUpsertWithoutImagesInput
    disconnect?: SuccessStoryWhereInput | boolean
    delete?: SuccessStoryWhereInput | boolean
    connect?: SuccessStoryWhereUniqueInput
    update?: XOR<XOR<SuccessStoryUpdateToOneWithWhereWithoutImagesInput, SuccessStoryUpdateWithoutImagesInput>, SuccessStoryUncheckedUpdateWithoutImagesInput>
  }

  export type BlogPostCreateNestedOneWithoutVideosInput = {
    create?: XOR<BlogPostCreateWithoutVideosInput, BlogPostUncheckedCreateWithoutVideosInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutVideosInput
    connect?: BlogPostWhereUniqueInput
  }

  export type TeamMemberCreateNestedOneWithoutVideosInput = {
    create?: XOR<TeamMemberCreateWithoutVideosInput, TeamMemberUncheckedCreateWithoutVideosInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutVideosInput
    connect?: TeamMemberWhereUniqueInput
  }

  export type NewsUpdateCreateNestedOneWithoutVideosInput = {
    create?: XOR<NewsUpdateCreateWithoutVideosInput, NewsUpdateUncheckedCreateWithoutVideosInput>
    connectOrCreate?: NewsUpdateCreateOrConnectWithoutVideosInput
    connect?: NewsUpdateWhereUniqueInput
  }

  export type SuccessStoryCreateNestedOneWithoutVideosInput = {
    create?: XOR<SuccessStoryCreateWithoutVideosInput, SuccessStoryUncheckedCreateWithoutVideosInput>
    connectOrCreate?: SuccessStoryCreateOrConnectWithoutVideosInput
    connect?: SuccessStoryWhereUniqueInput
  }

  export type BlogPostUpdateOneWithoutVideosNestedInput = {
    create?: XOR<BlogPostCreateWithoutVideosInput, BlogPostUncheckedCreateWithoutVideosInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutVideosInput
    upsert?: BlogPostUpsertWithoutVideosInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutVideosInput, BlogPostUpdateWithoutVideosInput>, BlogPostUncheckedUpdateWithoutVideosInput>
  }

  export type TeamMemberUpdateOneWithoutVideosNestedInput = {
    create?: XOR<TeamMemberCreateWithoutVideosInput, TeamMemberUncheckedCreateWithoutVideosInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutVideosInput
    upsert?: TeamMemberUpsertWithoutVideosInput
    disconnect?: TeamMemberWhereInput | boolean
    delete?: TeamMemberWhereInput | boolean
    connect?: TeamMemberWhereUniqueInput
    update?: XOR<XOR<TeamMemberUpdateToOneWithWhereWithoutVideosInput, TeamMemberUpdateWithoutVideosInput>, TeamMemberUncheckedUpdateWithoutVideosInput>
  }

  export type NewsUpdateUpdateOneWithoutVideosNestedInput = {
    create?: XOR<NewsUpdateCreateWithoutVideosInput, NewsUpdateUncheckedCreateWithoutVideosInput>
    connectOrCreate?: NewsUpdateCreateOrConnectWithoutVideosInput
    upsert?: NewsUpdateUpsertWithoutVideosInput
    disconnect?: NewsUpdateWhereInput | boolean
    delete?: NewsUpdateWhereInput | boolean
    connect?: NewsUpdateWhereUniqueInput
    update?: XOR<XOR<NewsUpdateUpdateToOneWithWhereWithoutVideosInput, NewsUpdateUpdateWithoutVideosInput>, NewsUpdateUncheckedUpdateWithoutVideosInput>
  }

  export type SuccessStoryUpdateOneWithoutVideosNestedInput = {
    create?: XOR<SuccessStoryCreateWithoutVideosInput, SuccessStoryUncheckedCreateWithoutVideosInput>
    connectOrCreate?: SuccessStoryCreateOrConnectWithoutVideosInput
    upsert?: SuccessStoryUpsertWithoutVideosInput
    disconnect?: SuccessStoryWhereInput | boolean
    delete?: SuccessStoryWhereInput | boolean
    connect?: SuccessStoryWhereUniqueInput
    update?: XOR<XOR<SuccessStoryUpdateToOneWithWhereWithoutVideosInput, SuccessStoryUpdateWithoutVideosInput>, SuccessStoryUncheckedUpdateWithoutVideosInput>
  }

  export type BlogPostCreateNestedOneWithoutYoutubeUrlsInput = {
    create?: XOR<BlogPostCreateWithoutYoutubeUrlsInput, BlogPostUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutYoutubeUrlsInput
    connect?: BlogPostWhereUniqueInput
  }

  export type TeamMemberCreateNestedOneWithoutYoutubeUrlsInput = {
    create?: XOR<TeamMemberCreateWithoutYoutubeUrlsInput, TeamMemberUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutYoutubeUrlsInput
    connect?: TeamMemberWhereUniqueInput
  }

  export type NewsUpdateCreateNestedOneWithoutYoutubeUrlsInput = {
    create?: XOR<NewsUpdateCreateWithoutYoutubeUrlsInput, NewsUpdateUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: NewsUpdateCreateOrConnectWithoutYoutubeUrlsInput
    connect?: NewsUpdateWhereUniqueInput
  }

  export type SuccessStoryCreateNestedOneWithoutYoutubeUrlsInput = {
    create?: XOR<SuccessStoryCreateWithoutYoutubeUrlsInput, SuccessStoryUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: SuccessStoryCreateOrConnectWithoutYoutubeUrlsInput
    connect?: SuccessStoryWhereUniqueInput
  }

  export type BlogPostUpdateOneWithoutYoutubeUrlsNestedInput = {
    create?: XOR<BlogPostCreateWithoutYoutubeUrlsInput, BlogPostUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutYoutubeUrlsInput
    upsert?: BlogPostUpsertWithoutYoutubeUrlsInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutYoutubeUrlsInput, BlogPostUpdateWithoutYoutubeUrlsInput>, BlogPostUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type TeamMemberUpdateOneWithoutYoutubeUrlsNestedInput = {
    create?: XOR<TeamMemberCreateWithoutYoutubeUrlsInput, TeamMemberUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: TeamMemberCreateOrConnectWithoutYoutubeUrlsInput
    upsert?: TeamMemberUpsertWithoutYoutubeUrlsInput
    disconnect?: TeamMemberWhereInput | boolean
    delete?: TeamMemberWhereInput | boolean
    connect?: TeamMemberWhereUniqueInput
    update?: XOR<XOR<TeamMemberUpdateToOneWithWhereWithoutYoutubeUrlsInput, TeamMemberUpdateWithoutYoutubeUrlsInput>, TeamMemberUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type NewsUpdateUpdateOneWithoutYoutubeUrlsNestedInput = {
    create?: XOR<NewsUpdateCreateWithoutYoutubeUrlsInput, NewsUpdateUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: NewsUpdateCreateOrConnectWithoutYoutubeUrlsInput
    upsert?: NewsUpdateUpsertWithoutYoutubeUrlsInput
    disconnect?: NewsUpdateWhereInput | boolean
    delete?: NewsUpdateWhereInput | boolean
    connect?: NewsUpdateWhereUniqueInput
    update?: XOR<XOR<NewsUpdateUpdateToOneWithWhereWithoutYoutubeUrlsInput, NewsUpdateUpdateWithoutYoutubeUrlsInput>, NewsUpdateUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type SuccessStoryUpdateOneWithoutYoutubeUrlsNestedInput = {
    create?: XOR<SuccessStoryCreateWithoutYoutubeUrlsInput, SuccessStoryUncheckedCreateWithoutYoutubeUrlsInput>
    connectOrCreate?: SuccessStoryCreateOrConnectWithoutYoutubeUrlsInput
    upsert?: SuccessStoryUpsertWithoutYoutubeUrlsInput
    disconnect?: SuccessStoryWhereInput | boolean
    delete?: SuccessStoryWhereInput | boolean
    connect?: SuccessStoryWhereUniqueInput
    update?: XOR<XOR<SuccessStoryUpdateToOneWithWhereWithoutYoutubeUrlsInput, SuccessStoryUpdateWithoutYoutubeUrlsInput>, SuccessStoryUncheckedUpdateWithoutYoutubeUrlsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedEnumBlogCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryFilter<$PrismaModel> | $Enums.BlogCategory
  }

  export type NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BlogCategory | EnumBlogCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.BlogCategory[] | ListEnumBlogCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumBlogCategoryWithAggregatesFilter<$PrismaModel> | $Enums.BlogCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBlogCategoryFilter<$PrismaModel>
    _max?: NestedEnumBlogCategoryFilter<$PrismaModel>
  }

  export type NestedEnumNewsPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsPriority | EnumNewsPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsPriorityFilter<$PrismaModel> | $Enums.NewsPriority
  }

  export type NestedEnumNewsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsCategoryFilter<$PrismaModel> | $Enums.NewsCategory
  }

  export type NestedEnumNewsPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsPriority | EnumNewsPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsPriority[] | ListEnumNewsPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsPriorityWithAggregatesFilter<$PrismaModel> | $Enums.NewsPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsPriorityFilter<$PrismaModel>
    _max?: NestedEnumNewsPriorityFilter<$PrismaModel>
  }

  export type NestedEnumNewsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsCategory[] | ListEnumNewsCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NewsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsCategoryFilter<$PrismaModel>
    _max?: NestedEnumNewsCategoryFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    impersonatedBy?: StringNullableFilter<"Session"> | string | null
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    banned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    banExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageCreateWithoutTeamMemberInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutImagesInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutImagesInput
    successStory?: SuccessStoryCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutTeamMemberInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type ImageCreateOrConnectWithoutTeamMemberInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutTeamMemberInput, ImageUncheckedCreateWithoutTeamMemberInput>
  }

  export type ImageCreateManyTeamMemberInputEnvelope = {
    data: ImageCreateManyTeamMemberInput | ImageCreateManyTeamMemberInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutTeamMemberInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutVideosInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutVideosInput
    successStory?: SuccessStoryCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutTeamMemberInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type VideoCreateOrConnectWithoutTeamMemberInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutTeamMemberInput, VideoUncheckedCreateWithoutTeamMemberInput>
  }

  export type VideoCreateManyTeamMemberInputEnvelope = {
    data: VideoCreateManyTeamMemberInput | VideoCreateManyTeamMemberInput[]
    skipDuplicates?: boolean
  }

  export type YoutubeUrlCreateWithoutTeamMemberInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutYoutubeUrlsInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutYoutubeUrlsInput
    successStory?: SuccessStoryCreateNestedOneWithoutYoutubeUrlsInput
  }

  export type YoutubeUrlUncheckedCreateWithoutTeamMemberInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlCreateOrConnectWithoutTeamMemberInput = {
    where: YoutubeUrlWhereUniqueInput
    create: XOR<YoutubeUrlCreateWithoutTeamMemberInput, YoutubeUrlUncheckedCreateWithoutTeamMemberInput>
  }

  export type YoutubeUrlCreateManyTeamMemberInputEnvelope = {
    data: YoutubeUrlCreateManyTeamMemberInput | YoutubeUrlCreateManyTeamMemberInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutTeamMemberInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutTeamMemberInput, ImageUncheckedUpdateWithoutTeamMemberInput>
    create: XOR<ImageCreateWithoutTeamMemberInput, ImageUncheckedCreateWithoutTeamMemberInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutTeamMemberInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutTeamMemberInput, ImageUncheckedUpdateWithoutTeamMemberInput>
  }

  export type ImageUpdateManyWithWhereWithoutTeamMemberInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutTeamMemberInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
    blogPostId?: StringNullableFilter<"Image"> | string | null
    teamMemberId?: StringNullableFilter<"Image"> | string | null
    newsUpdateId?: StringNullableFilter<"Image"> | string | null
    successStoryId?: StringNullableFilter<"Image"> | string | null
  }

  export type VideoUpsertWithWhereUniqueWithoutTeamMemberInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutTeamMemberInput, VideoUncheckedUpdateWithoutTeamMemberInput>
    create: XOR<VideoCreateWithoutTeamMemberInput, VideoUncheckedCreateWithoutTeamMemberInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutTeamMemberInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutTeamMemberInput, VideoUncheckedUpdateWithoutTeamMemberInput>
  }

  export type VideoUpdateManyWithWhereWithoutTeamMemberInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutTeamMemberInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    url?: StringFilter<"Video"> | string
    title?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    blogPostId?: StringNullableFilter<"Video"> | string | null
    teamMemberId?: StringNullableFilter<"Video"> | string | null
    newsUpdateId?: StringNullableFilter<"Video"> | string | null
    successStoryId?: StringNullableFilter<"Video"> | string | null
  }

  export type YoutubeUrlUpsertWithWhereUniqueWithoutTeamMemberInput = {
    where: YoutubeUrlWhereUniqueInput
    update: XOR<YoutubeUrlUpdateWithoutTeamMemberInput, YoutubeUrlUncheckedUpdateWithoutTeamMemberInput>
    create: XOR<YoutubeUrlCreateWithoutTeamMemberInput, YoutubeUrlUncheckedCreateWithoutTeamMemberInput>
  }

  export type YoutubeUrlUpdateWithWhereUniqueWithoutTeamMemberInput = {
    where: YoutubeUrlWhereUniqueInput
    data: XOR<YoutubeUrlUpdateWithoutTeamMemberInput, YoutubeUrlUncheckedUpdateWithoutTeamMemberInput>
  }

  export type YoutubeUrlUpdateManyWithWhereWithoutTeamMemberInput = {
    where: YoutubeUrlScalarWhereInput
    data: XOR<YoutubeUrlUpdateManyMutationInput, YoutubeUrlUncheckedUpdateManyWithoutTeamMemberInput>
  }

  export type YoutubeUrlScalarWhereInput = {
    AND?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
    OR?: YoutubeUrlScalarWhereInput[]
    NOT?: YoutubeUrlScalarWhereInput | YoutubeUrlScalarWhereInput[]
    id?: StringFilter<"YoutubeUrl"> | string
    url?: StringFilter<"YoutubeUrl"> | string
    title?: StringNullableFilter<"YoutubeUrl"> | string | null
    createdAt?: DateTimeFilter<"YoutubeUrl"> | Date | string
    updatedAt?: DateTimeFilter<"YoutubeUrl"> | Date | string
    blogPostId?: StringNullableFilter<"YoutubeUrl"> | string | null
    teamMemberId?: StringNullableFilter<"YoutubeUrl"> | string | null
    newsUpdateId?: StringNullableFilter<"YoutubeUrl"> | string | null
    successStoryId?: StringNullableFilter<"YoutubeUrl"> | string | null
  }

  export type ImageCreateWithoutSuccessStoryInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutImagesInput
    teamMember?: TeamMemberCreateNestedOneWithoutImagesInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutSuccessStoryInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
  }

  export type ImageCreateOrConnectWithoutSuccessStoryInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSuccessStoryInput, ImageUncheckedCreateWithoutSuccessStoryInput>
  }

  export type ImageCreateManySuccessStoryInputEnvelope = {
    data: ImageCreateManySuccessStoryInput | ImageCreateManySuccessStoryInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutSuccessStoryInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutVideosInput
    teamMember?: TeamMemberCreateNestedOneWithoutVideosInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutSuccessStoryInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
  }

  export type VideoCreateOrConnectWithoutSuccessStoryInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutSuccessStoryInput, VideoUncheckedCreateWithoutSuccessStoryInput>
  }

  export type VideoCreateManySuccessStoryInputEnvelope = {
    data: VideoCreateManySuccessStoryInput | VideoCreateManySuccessStoryInput[]
    skipDuplicates?: boolean
  }

  export type YoutubeUrlCreateWithoutSuccessStoryInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutYoutubeUrlsInput
    teamMember?: TeamMemberCreateNestedOneWithoutYoutubeUrlsInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutYoutubeUrlsInput
  }

  export type YoutubeUrlUncheckedCreateWithoutSuccessStoryInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
  }

  export type YoutubeUrlCreateOrConnectWithoutSuccessStoryInput = {
    where: YoutubeUrlWhereUniqueInput
    create: XOR<YoutubeUrlCreateWithoutSuccessStoryInput, YoutubeUrlUncheckedCreateWithoutSuccessStoryInput>
  }

  export type YoutubeUrlCreateManySuccessStoryInputEnvelope = {
    data: YoutubeUrlCreateManySuccessStoryInput | YoutubeUrlCreateManySuccessStoryInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutSuccessStoryInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutSuccessStoryInput, ImageUncheckedUpdateWithoutSuccessStoryInput>
    create: XOR<ImageCreateWithoutSuccessStoryInput, ImageUncheckedCreateWithoutSuccessStoryInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutSuccessStoryInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutSuccessStoryInput, ImageUncheckedUpdateWithoutSuccessStoryInput>
  }

  export type ImageUpdateManyWithWhereWithoutSuccessStoryInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutSuccessStoryInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutSuccessStoryInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutSuccessStoryInput, VideoUncheckedUpdateWithoutSuccessStoryInput>
    create: XOR<VideoCreateWithoutSuccessStoryInput, VideoUncheckedCreateWithoutSuccessStoryInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutSuccessStoryInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutSuccessStoryInput, VideoUncheckedUpdateWithoutSuccessStoryInput>
  }

  export type VideoUpdateManyWithWhereWithoutSuccessStoryInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutSuccessStoryInput>
  }

  export type YoutubeUrlUpsertWithWhereUniqueWithoutSuccessStoryInput = {
    where: YoutubeUrlWhereUniqueInput
    update: XOR<YoutubeUrlUpdateWithoutSuccessStoryInput, YoutubeUrlUncheckedUpdateWithoutSuccessStoryInput>
    create: XOR<YoutubeUrlCreateWithoutSuccessStoryInput, YoutubeUrlUncheckedCreateWithoutSuccessStoryInput>
  }

  export type YoutubeUrlUpdateWithWhereUniqueWithoutSuccessStoryInput = {
    where: YoutubeUrlWhereUniqueInput
    data: XOR<YoutubeUrlUpdateWithoutSuccessStoryInput, YoutubeUrlUncheckedUpdateWithoutSuccessStoryInput>
  }

  export type YoutubeUrlUpdateManyWithWhereWithoutSuccessStoryInput = {
    where: YoutubeUrlScalarWhereInput
    data: XOR<YoutubeUrlUpdateManyMutationInput, YoutubeUrlUncheckedUpdateManyWithoutSuccessStoryInput>
  }

  export type ImageCreateWithoutBlogPostInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMember?: TeamMemberCreateNestedOneWithoutImagesInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutImagesInput
    successStory?: SuccessStoryCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutBlogPostInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type ImageCreateOrConnectWithoutBlogPostInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutBlogPostInput, ImageUncheckedCreateWithoutBlogPostInput>
  }

  export type ImageCreateManyBlogPostInputEnvelope = {
    data: ImageCreateManyBlogPostInput | ImageCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutBlogPostInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMember?: TeamMemberCreateNestedOneWithoutVideosInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutVideosInput
    successStory?: SuccessStoryCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutBlogPostInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type VideoCreateOrConnectWithoutBlogPostInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutBlogPostInput, VideoUncheckedCreateWithoutBlogPostInput>
  }

  export type VideoCreateManyBlogPostInputEnvelope = {
    data: VideoCreateManyBlogPostInput | VideoCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type YoutubeUrlCreateWithoutBlogPostInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMember?: TeamMemberCreateNestedOneWithoutYoutubeUrlsInput
    newsUpdate?: NewsUpdateCreateNestedOneWithoutYoutubeUrlsInput
    successStory?: SuccessStoryCreateNestedOneWithoutYoutubeUrlsInput
  }

  export type YoutubeUrlUncheckedCreateWithoutBlogPostInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlCreateOrConnectWithoutBlogPostInput = {
    where: YoutubeUrlWhereUniqueInput
    create: XOR<YoutubeUrlCreateWithoutBlogPostInput, YoutubeUrlUncheckedCreateWithoutBlogPostInput>
  }

  export type YoutubeUrlCreateManyBlogPostInputEnvelope = {
    data: YoutubeUrlCreateManyBlogPostInput | YoutubeUrlCreateManyBlogPostInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutBlogPostInput, ImageUncheckedUpdateWithoutBlogPostInput>
    create: XOR<ImageCreateWithoutBlogPostInput, ImageUncheckedCreateWithoutBlogPostInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutBlogPostInput, ImageUncheckedUpdateWithoutBlogPostInput>
  }

  export type ImageUpdateManyWithWhereWithoutBlogPostInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutBlogPostInput, VideoUncheckedUpdateWithoutBlogPostInput>
    create: XOR<VideoCreateWithoutBlogPostInput, VideoUncheckedCreateWithoutBlogPostInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutBlogPostInput, VideoUncheckedUpdateWithoutBlogPostInput>
  }

  export type VideoUpdateManyWithWhereWithoutBlogPostInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type YoutubeUrlUpsertWithWhereUniqueWithoutBlogPostInput = {
    where: YoutubeUrlWhereUniqueInput
    update: XOR<YoutubeUrlUpdateWithoutBlogPostInput, YoutubeUrlUncheckedUpdateWithoutBlogPostInput>
    create: XOR<YoutubeUrlCreateWithoutBlogPostInput, YoutubeUrlUncheckedCreateWithoutBlogPostInput>
  }

  export type YoutubeUrlUpdateWithWhereUniqueWithoutBlogPostInput = {
    where: YoutubeUrlWhereUniqueInput
    data: XOR<YoutubeUrlUpdateWithoutBlogPostInput, YoutubeUrlUncheckedUpdateWithoutBlogPostInput>
  }

  export type YoutubeUrlUpdateManyWithWhereWithoutBlogPostInput = {
    where: YoutubeUrlScalarWhereInput
    data: XOR<YoutubeUrlUpdateManyMutationInput, YoutubeUrlUncheckedUpdateManyWithoutBlogPostInput>
  }

  export type ImageCreateWithoutNewsUpdateInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutImagesInput
    teamMember?: TeamMemberCreateNestedOneWithoutImagesInput
    successStory?: SuccessStoryCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutNewsUpdateInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    successStoryId?: string | null
  }

  export type ImageCreateOrConnectWithoutNewsUpdateInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutNewsUpdateInput, ImageUncheckedCreateWithoutNewsUpdateInput>
  }

  export type ImageCreateManyNewsUpdateInputEnvelope = {
    data: ImageCreateManyNewsUpdateInput | ImageCreateManyNewsUpdateInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutNewsUpdateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutVideosInput
    teamMember?: TeamMemberCreateNestedOneWithoutVideosInput
    successStory?: SuccessStoryCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutNewsUpdateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    successStoryId?: string | null
  }

  export type VideoCreateOrConnectWithoutNewsUpdateInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutNewsUpdateInput, VideoUncheckedCreateWithoutNewsUpdateInput>
  }

  export type VideoCreateManyNewsUpdateInputEnvelope = {
    data: VideoCreateManyNewsUpdateInput | VideoCreateManyNewsUpdateInput[]
    skipDuplicates?: boolean
  }

  export type YoutubeUrlCreateWithoutNewsUpdateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPost?: BlogPostCreateNestedOneWithoutYoutubeUrlsInput
    teamMember?: TeamMemberCreateNestedOneWithoutYoutubeUrlsInput
    successStory?: SuccessStoryCreateNestedOneWithoutYoutubeUrlsInput
  }

  export type YoutubeUrlUncheckedCreateWithoutNewsUpdateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlCreateOrConnectWithoutNewsUpdateInput = {
    where: YoutubeUrlWhereUniqueInput
    create: XOR<YoutubeUrlCreateWithoutNewsUpdateInput, YoutubeUrlUncheckedCreateWithoutNewsUpdateInput>
  }

  export type YoutubeUrlCreateManyNewsUpdateInputEnvelope = {
    data: YoutubeUrlCreateManyNewsUpdateInput | YoutubeUrlCreateManyNewsUpdateInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutNewsUpdateInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutNewsUpdateInput, ImageUncheckedUpdateWithoutNewsUpdateInput>
    create: XOR<ImageCreateWithoutNewsUpdateInput, ImageUncheckedCreateWithoutNewsUpdateInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutNewsUpdateInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutNewsUpdateInput, ImageUncheckedUpdateWithoutNewsUpdateInput>
  }

  export type ImageUpdateManyWithWhereWithoutNewsUpdateInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutNewsUpdateInput>
  }

  export type VideoUpsertWithWhereUniqueWithoutNewsUpdateInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutNewsUpdateInput, VideoUncheckedUpdateWithoutNewsUpdateInput>
    create: XOR<VideoCreateWithoutNewsUpdateInput, VideoUncheckedCreateWithoutNewsUpdateInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutNewsUpdateInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutNewsUpdateInput, VideoUncheckedUpdateWithoutNewsUpdateInput>
  }

  export type VideoUpdateManyWithWhereWithoutNewsUpdateInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutNewsUpdateInput>
  }

  export type YoutubeUrlUpsertWithWhereUniqueWithoutNewsUpdateInput = {
    where: YoutubeUrlWhereUniqueInput
    update: XOR<YoutubeUrlUpdateWithoutNewsUpdateInput, YoutubeUrlUncheckedUpdateWithoutNewsUpdateInput>
    create: XOR<YoutubeUrlCreateWithoutNewsUpdateInput, YoutubeUrlUncheckedCreateWithoutNewsUpdateInput>
  }

  export type YoutubeUrlUpdateWithWhereUniqueWithoutNewsUpdateInput = {
    where: YoutubeUrlWhereUniqueInput
    data: XOR<YoutubeUrlUpdateWithoutNewsUpdateInput, YoutubeUrlUncheckedUpdateWithoutNewsUpdateInput>
  }

  export type YoutubeUrlUpdateManyWithWhereWithoutNewsUpdateInput = {
    where: YoutubeUrlScalarWhereInput
    data: XOR<YoutubeUrlUpdateManyMutationInput, YoutubeUrlUncheckedUpdateManyWithoutNewsUpdateInput>
  }

  export type BlogPostCreateWithoutImagesInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutBlogPostInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutImagesInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutBlogPostInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutImagesInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutImagesInput, BlogPostUncheckedCreateWithoutImagesInput>
  }

  export type TeamMemberCreateWithoutImagesInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutTeamMemberInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutTeamMemberInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberCreateOrConnectWithoutImagesInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutImagesInput, TeamMemberUncheckedCreateWithoutImagesInput>
  }

  export type NewsUpdateCreateWithoutImagesInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutNewsUpdateInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateUncheckedCreateWithoutImagesInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutNewsUpdateInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateCreateOrConnectWithoutImagesInput = {
    where: NewsUpdateWhereUniqueInput
    create: XOR<NewsUpdateCreateWithoutImagesInput, NewsUpdateUncheckedCreateWithoutImagesInput>
  }

  export type SuccessStoryCreateWithoutImagesInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutSuccessStoryInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryUncheckedCreateWithoutImagesInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutSuccessStoryInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryCreateOrConnectWithoutImagesInput = {
    where: SuccessStoryWhereUniqueInput
    create: XOR<SuccessStoryCreateWithoutImagesInput, SuccessStoryUncheckedCreateWithoutImagesInput>
  }

  export type BlogPostUpsertWithoutImagesInput = {
    update: XOR<BlogPostUpdateWithoutImagesInput, BlogPostUncheckedUpdateWithoutImagesInput>
    create: XOR<BlogPostCreateWithoutImagesInput, BlogPostUncheckedCreateWithoutImagesInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutImagesInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutImagesInput, BlogPostUncheckedUpdateWithoutImagesInput>
  }

  export type BlogPostUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutBlogPostNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutBlogPostNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type TeamMemberUpsertWithoutImagesInput = {
    update: XOR<TeamMemberUpdateWithoutImagesInput, TeamMemberUncheckedUpdateWithoutImagesInput>
    create: XOR<TeamMemberCreateWithoutImagesInput, TeamMemberUncheckedCreateWithoutImagesInput>
    where?: TeamMemberWhereInput
  }

  export type TeamMemberUpdateToOneWithWhereWithoutImagesInput = {
    where?: TeamMemberWhereInput
    data: XOR<TeamMemberUpdateWithoutImagesInput, TeamMemberUncheckedUpdateWithoutImagesInput>
  }

  export type TeamMemberUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutTeamMemberNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutTeamMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutTeamMemberNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutTeamMemberNestedInput
  }

  export type NewsUpdateUpsertWithoutImagesInput = {
    update: XOR<NewsUpdateUpdateWithoutImagesInput, NewsUpdateUncheckedUpdateWithoutImagesInput>
    create: XOR<NewsUpdateCreateWithoutImagesInput, NewsUpdateUncheckedCreateWithoutImagesInput>
    where?: NewsUpdateWhereInput
  }

  export type NewsUpdateUpdateToOneWithWhereWithoutImagesInput = {
    where?: NewsUpdateWhereInput
    data: XOR<NewsUpdateUpdateWithoutImagesInput, NewsUpdateUncheckedUpdateWithoutImagesInput>
  }

  export type NewsUpdateUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutNewsUpdateNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutNewsUpdateNestedInput
  }

  export type NewsUpdateUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutNewsUpdateNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutNewsUpdateNestedInput
  }

  export type SuccessStoryUpsertWithoutImagesInput = {
    update: XOR<SuccessStoryUpdateWithoutImagesInput, SuccessStoryUncheckedUpdateWithoutImagesInput>
    create: XOR<SuccessStoryCreateWithoutImagesInput, SuccessStoryUncheckedCreateWithoutImagesInput>
    where?: SuccessStoryWhereInput
  }

  export type SuccessStoryUpdateToOneWithWhereWithoutImagesInput = {
    where?: SuccessStoryWhereInput
    data: XOR<SuccessStoryUpdateWithoutImagesInput, SuccessStoryUncheckedUpdateWithoutImagesInput>
  }

  export type SuccessStoryUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutSuccessStoryNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutSuccessStoryNestedInput
  }

  export type SuccessStoryUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutSuccessStoryNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutSuccessStoryNestedInput
  }

  export type BlogPostCreateWithoutVideosInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutBlogPostInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutVideosInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutBlogPostInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutVideosInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutVideosInput, BlogPostUncheckedCreateWithoutVideosInput>
  }

  export type TeamMemberCreateWithoutVideosInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutTeamMemberInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutTeamMemberInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberCreateOrConnectWithoutVideosInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutVideosInput, TeamMemberUncheckedCreateWithoutVideosInput>
  }

  export type NewsUpdateCreateWithoutVideosInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutNewsUpdateInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateUncheckedCreateWithoutVideosInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutNewsUpdateInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateCreateOrConnectWithoutVideosInput = {
    where: NewsUpdateWhereUniqueInput
    create: XOR<NewsUpdateCreateWithoutVideosInput, NewsUpdateUncheckedCreateWithoutVideosInput>
  }

  export type SuccessStoryCreateWithoutVideosInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutSuccessStoryInput
    youtubeUrls?: YoutubeUrlCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryUncheckedCreateWithoutVideosInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutSuccessStoryInput
    youtubeUrls?: YoutubeUrlUncheckedCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryCreateOrConnectWithoutVideosInput = {
    where: SuccessStoryWhereUniqueInput
    create: XOR<SuccessStoryCreateWithoutVideosInput, SuccessStoryUncheckedCreateWithoutVideosInput>
  }

  export type BlogPostUpsertWithoutVideosInput = {
    update: XOR<BlogPostUpdateWithoutVideosInput, BlogPostUncheckedUpdateWithoutVideosInput>
    create: XOR<BlogPostCreateWithoutVideosInput, BlogPostUncheckedCreateWithoutVideosInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutVideosInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutVideosInput, BlogPostUncheckedUpdateWithoutVideosInput>
  }

  export type BlogPostUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutBlogPostNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutBlogPostNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type TeamMemberUpsertWithoutVideosInput = {
    update: XOR<TeamMemberUpdateWithoutVideosInput, TeamMemberUncheckedUpdateWithoutVideosInput>
    create: XOR<TeamMemberCreateWithoutVideosInput, TeamMemberUncheckedCreateWithoutVideosInput>
    where?: TeamMemberWhereInput
  }

  export type TeamMemberUpdateToOneWithWhereWithoutVideosInput = {
    where?: TeamMemberWhereInput
    data: XOR<TeamMemberUpdateWithoutVideosInput, TeamMemberUncheckedUpdateWithoutVideosInput>
  }

  export type TeamMemberUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutTeamMemberNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutTeamMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutTeamMemberNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutTeamMemberNestedInput
  }

  export type NewsUpdateUpsertWithoutVideosInput = {
    update: XOR<NewsUpdateUpdateWithoutVideosInput, NewsUpdateUncheckedUpdateWithoutVideosInput>
    create: XOR<NewsUpdateCreateWithoutVideosInput, NewsUpdateUncheckedCreateWithoutVideosInput>
    where?: NewsUpdateWhereInput
  }

  export type NewsUpdateUpdateToOneWithWhereWithoutVideosInput = {
    where?: NewsUpdateWhereInput
    data: XOR<NewsUpdateUpdateWithoutVideosInput, NewsUpdateUncheckedUpdateWithoutVideosInput>
  }

  export type NewsUpdateUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutNewsUpdateNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutNewsUpdateNestedInput
  }

  export type NewsUpdateUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutNewsUpdateNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutNewsUpdateNestedInput
  }

  export type SuccessStoryUpsertWithoutVideosInput = {
    update: XOR<SuccessStoryUpdateWithoutVideosInput, SuccessStoryUncheckedUpdateWithoutVideosInput>
    create: XOR<SuccessStoryCreateWithoutVideosInput, SuccessStoryUncheckedCreateWithoutVideosInput>
    where?: SuccessStoryWhereInput
  }

  export type SuccessStoryUpdateToOneWithWhereWithoutVideosInput = {
    where?: SuccessStoryWhereInput
    data: XOR<SuccessStoryUpdateWithoutVideosInput, SuccessStoryUncheckedUpdateWithoutVideosInput>
  }

  export type SuccessStoryUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutSuccessStoryNestedInput
    youtubeUrls?: YoutubeUrlUpdateManyWithoutSuccessStoryNestedInput
  }

  export type SuccessStoryUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutSuccessStoryNestedInput
    youtubeUrls?: YoutubeUrlUncheckedUpdateManyWithoutSuccessStoryNestedInput
  }

  export type BlogPostCreateWithoutYoutubeUrlsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutBlogPostInput
    videos?: VideoCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutYoutubeUrlsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    content: string
    author: string
    category: $Enums.BlogCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutBlogPostInput
    videos?: VideoUncheckedCreateNestedManyWithoutBlogPostInput
  }

  export type BlogPostCreateOrConnectWithoutYoutubeUrlsInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutYoutubeUrlsInput, BlogPostUncheckedCreateWithoutYoutubeUrlsInput>
  }

  export type TeamMemberCreateWithoutYoutubeUrlsInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutTeamMemberInput
    videos?: VideoCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutYoutubeUrlsInput = {
    id?: string
    name: string
    position: string
    email: string
    phone?: string | null
    bio: string
    expertise?: string | null
    achievements?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutTeamMemberInput
    videos?: VideoUncheckedCreateNestedManyWithoutTeamMemberInput
  }

  export type TeamMemberCreateOrConnectWithoutYoutubeUrlsInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutYoutubeUrlsInput, TeamMemberUncheckedCreateWithoutYoutubeUrlsInput>
  }

  export type NewsUpdateCreateWithoutYoutubeUrlsInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutNewsUpdateInput
    videos?: VideoCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateUncheckedCreateWithoutYoutubeUrlsInput = {
    id?: string
    headline: string
    summary: string
    content: string
    location?: string | null
    eventDate?: Date | string | null
    priority: $Enums.NewsPriority
    category: $Enums.NewsCategory
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutNewsUpdateInput
    videos?: VideoUncheckedCreateNestedManyWithoutNewsUpdateInput
  }

  export type NewsUpdateCreateOrConnectWithoutYoutubeUrlsInput = {
    where: NewsUpdateWhereUniqueInput
    create: XOR<NewsUpdateCreateWithoutYoutubeUrlsInput, NewsUpdateUncheckedCreateWithoutYoutubeUrlsInput>
  }

  export type SuccessStoryCreateWithoutYoutubeUrlsInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutSuccessStoryInput
    videos?: VideoCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryUncheckedCreateWithoutYoutubeUrlsInput = {
    id?: string
    studentName: string
    year: number
    currentPosition: string
    company: string
    story: string
    impact: string
    advice?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutSuccessStoryInput
    videos?: VideoUncheckedCreateNestedManyWithoutSuccessStoryInput
  }

  export type SuccessStoryCreateOrConnectWithoutYoutubeUrlsInput = {
    where: SuccessStoryWhereUniqueInput
    create: XOR<SuccessStoryCreateWithoutYoutubeUrlsInput, SuccessStoryUncheckedCreateWithoutYoutubeUrlsInput>
  }

  export type BlogPostUpsertWithoutYoutubeUrlsInput = {
    update: XOR<BlogPostUpdateWithoutYoutubeUrlsInput, BlogPostUncheckedUpdateWithoutYoutubeUrlsInput>
    create: XOR<BlogPostCreateWithoutYoutubeUrlsInput, BlogPostUncheckedCreateWithoutYoutubeUrlsInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutYoutubeUrlsInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutYoutubeUrlsInput, BlogPostUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type BlogPostUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutBlogPostNestedInput
    videos?: VideoUpdateManyWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    category?: EnumBlogCategoryFieldUpdateOperationsInput | $Enums.BlogCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutBlogPostNestedInput
    videos?: VideoUncheckedUpdateManyWithoutBlogPostNestedInput
  }

  export type TeamMemberUpsertWithoutYoutubeUrlsInput = {
    update: XOR<TeamMemberUpdateWithoutYoutubeUrlsInput, TeamMemberUncheckedUpdateWithoutYoutubeUrlsInput>
    create: XOR<TeamMemberCreateWithoutYoutubeUrlsInput, TeamMemberUncheckedCreateWithoutYoutubeUrlsInput>
    where?: TeamMemberWhereInput
  }

  export type TeamMemberUpdateToOneWithWhereWithoutYoutubeUrlsInput = {
    where?: TeamMemberWhereInput
    data: XOR<TeamMemberUpdateWithoutYoutubeUrlsInput, TeamMemberUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type TeamMemberUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutTeamMemberNestedInput
    videos?: VideoUpdateManyWithoutTeamMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: StringFieldUpdateOperationsInput | string
    expertise?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutTeamMemberNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTeamMemberNestedInput
  }

  export type NewsUpdateUpsertWithoutYoutubeUrlsInput = {
    update: XOR<NewsUpdateUpdateWithoutYoutubeUrlsInput, NewsUpdateUncheckedUpdateWithoutYoutubeUrlsInput>
    create: XOR<NewsUpdateCreateWithoutYoutubeUrlsInput, NewsUpdateUncheckedCreateWithoutYoutubeUrlsInput>
    where?: NewsUpdateWhereInput
  }

  export type NewsUpdateUpdateToOneWithWhereWithoutYoutubeUrlsInput = {
    where?: NewsUpdateWhereInput
    data: XOR<NewsUpdateUpdateWithoutYoutubeUrlsInput, NewsUpdateUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type NewsUpdateUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutNewsUpdateNestedInput
    videos?: VideoUpdateManyWithoutNewsUpdateNestedInput
  }

  export type NewsUpdateUncheckedUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: EnumNewsPriorityFieldUpdateOperationsInput | $Enums.NewsPriority
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutNewsUpdateNestedInput
    videos?: VideoUncheckedUpdateManyWithoutNewsUpdateNestedInput
  }

  export type SuccessStoryUpsertWithoutYoutubeUrlsInput = {
    update: XOR<SuccessStoryUpdateWithoutYoutubeUrlsInput, SuccessStoryUncheckedUpdateWithoutYoutubeUrlsInput>
    create: XOR<SuccessStoryCreateWithoutYoutubeUrlsInput, SuccessStoryUncheckedCreateWithoutYoutubeUrlsInput>
    where?: SuccessStoryWhereInput
  }

  export type SuccessStoryUpdateToOneWithWhereWithoutYoutubeUrlsInput = {
    where?: SuccessStoryWhereInput
    data: XOR<SuccessStoryUpdateWithoutYoutubeUrlsInput, SuccessStoryUncheckedUpdateWithoutYoutubeUrlsInput>
  }

  export type SuccessStoryUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutSuccessStoryNestedInput
    videos?: VideoUpdateManyWithoutSuccessStoryNestedInput
  }

  export type SuccessStoryUncheckedUpdateWithoutYoutubeUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentPosition?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    story?: StringFieldUpdateOperationsInput | string
    impact?: StringFieldUpdateOperationsInput | string
    advice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutSuccessStoryNestedInput
    videos?: VideoUncheckedUpdateManyWithoutSuccessStoryNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    impersonatedBy?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    impersonatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyTeamMemberInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type VideoCreateManyTeamMemberInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlCreateManyTeamMemberInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type ImageUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutImagesNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutImagesNestedInput
    successStory?: SuccessStoryUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutVideosNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutVideosNestedInput
    successStory?: SuccessStoryUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateManyWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutYoutubeUrlsNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutYoutubeUrlsNestedInput
    successStory?: SuccessStoryUpdateOneWithoutYoutubeUrlsNestedInput
  }

  export type YoutubeUrlUncheckedUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManySuccessStoryInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
  }

  export type VideoCreateManySuccessStoryInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
  }

  export type YoutubeUrlCreateManySuccessStoryInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    newsUpdateId?: string | null
  }

  export type ImageUpdateWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutImagesNestedInput
    teamMember?: TeamMemberUpdateOneWithoutImagesNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUpdateWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutVideosNestedInput
    teamMember?: TeamMemberUpdateOneWithoutVideosNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateManyWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUpdateWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutYoutubeUrlsNestedInput
    teamMember?: TeamMemberUpdateOneWithoutYoutubeUrlsNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutYoutubeUrlsNestedInput
  }

  export type YoutubeUrlUncheckedUpdateWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutSuccessStoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyBlogPostInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type VideoCreateManyBlogPostInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlCreateManyBlogPostInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMemberId?: string | null
    newsUpdateId?: string | null
    successStoryId?: string | null
  }

  export type ImageUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMember?: TeamMemberUpdateOneWithoutImagesNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutImagesNestedInput
    successStory?: SuccessStoryUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMember?: TeamMemberUpdateOneWithoutVideosNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutVideosNestedInput
    successStory?: SuccessStoryUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateManyWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMember?: TeamMemberUpdateOneWithoutYoutubeUrlsNestedInput
    newsUpdate?: NewsUpdateUpdateOneWithoutYoutubeUrlsNestedInput
    successStory?: SuccessStoryUpdateOneWithoutYoutubeUrlsNestedInput
  }

  export type YoutubeUrlUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    newsUpdateId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyNewsUpdateInput = {
    id?: string
    url: string
    alt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    successStoryId?: string | null
  }

  export type VideoCreateManyNewsUpdateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    successStoryId?: string | null
  }

  export type YoutubeUrlCreateManyNewsUpdateInput = {
    id?: string
    url: string
    title?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blogPostId?: string | null
    teamMemberId?: string | null
    successStoryId?: string | null
  }

  export type ImageUpdateWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutImagesNestedInput
    teamMember?: TeamMemberUpdateOneWithoutImagesNestedInput
    successStory?: SuccessStoryUpdateOneWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUpdateWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutVideosNestedInput
    teamMember?: TeamMemberUpdateOneWithoutVideosNestedInput
    successStory?: SuccessStoryUpdateOneWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VideoUncheckedUpdateManyWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUpdateWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPost?: BlogPostUpdateOneWithoutYoutubeUrlsNestedInput
    teamMember?: TeamMemberUpdateOneWithoutYoutubeUrlsNestedInput
    successStory?: SuccessStoryUpdateOneWithoutYoutubeUrlsNestedInput
  }

  export type YoutubeUrlUncheckedUpdateWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YoutubeUrlUncheckedUpdateManyWithoutNewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blogPostId?: NullableStringFieldUpdateOperationsInput | string | null
    teamMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    successStoryId?: NullableStringFieldUpdateOperationsInput | string | null
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