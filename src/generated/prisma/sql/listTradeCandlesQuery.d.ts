import * as $runtime from "../runtime/library"

/**
 * @param text
 * @param float8
 * @param numeric
 * @param int8
 */
export const listTradeCandlesQuery: (text: string, float8: number, numeric: number | $runtime.Decimal, int8: number | bigint) => $runtime.TypedSql<listTradeCandlesQuery.Parameters, listTradeCandlesQuery.Result>

export namespace listTradeCandlesQuery {
  export type Parameters = [text: string, float8: number, numeric: number | $runtime.Decimal, int8: number | bigint]
  export type Result = {
    timestamp: $runtime.Decimal | null
    open: $runtime.Decimal | null
    high: $runtime.Decimal | null
    low: $runtime.Decimal | null
    close: $runtime.Decimal | null
    volume: $runtime.Decimal | null
  }
}
