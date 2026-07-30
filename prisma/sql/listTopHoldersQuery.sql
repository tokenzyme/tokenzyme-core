SELECT
  account_id,
  SUM(
    CASE
      WHEN type = 'BUY' THEN token_amount
      WHEN type = 'SELL' THEN -token_amount
      ELSE 0
    END
  ) AS balance
FROM trades
WHERE token_id = $1
GROUP BY account_id
HAVING SUM(
  CASE
    WHEN type = 'BUY' THEN token_amount
    WHEN type = 'SELL' THEN -token_amount
    ELSE 0
  END
) > 0
ORDER BY balance DESC
LIMIT 10;
