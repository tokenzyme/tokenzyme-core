WITH raw AS (
  SELECT
    FLOOR(EXTRACT(EPOCH FROM created_at) / $3) * $3 AS bucket,
    avg_price,
    token_amount,
    created_at
  FROM trades
  WHERE token_id = $1
    AND created_at <= TO_TIMESTAMP($2)
),
windowed AS (
  SELECT
    bucket,
    avg_price,
    token_amount,
    created_at,
    FIRST_VALUE(avg_price) OVER (
      PARTITION BY bucket
      ORDER BY created_at
    ) AS open,
    LAST_VALUE(avg_price) OVER (
      PARTITION BY bucket
      ORDER BY created_at
      ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS close
  FROM raw
),
grouped AS (
  SELECT
    bucket AS timestamp,
    open,
    MAX(avg_price) AS high,
    MIN(avg_price) AS low,
    close,
    SUM(token_amount) AS volume
  FROM windowed
  GROUP BY bucket, open, close
)
SELECT *
FROM grouped
ORDER BY timestamp DESC
LIMIT $4;
