import * as $runtime from "../runtime/library"

/**
 * @param text
 */
export const listTopHoldersQuery: (text: string) => $runtime.TypedSql<listTopHoldersQuery.Parameters, listTopHoldersQuery.Result>

export namespace listTopHoldersQuery {
  export type Parameters = [text: string]
  export type Result = {
    account_id: string
    balance: $runtime.Decimal | null
  }
}
