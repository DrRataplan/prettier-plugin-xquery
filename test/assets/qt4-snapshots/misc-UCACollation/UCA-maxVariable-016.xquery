compare(
  "$10000",
  "€9000",
  concat(
    $collation,
    "maxVariable=currency;numeric=yes;alternate=shifted;fallback=no"
  )
)
