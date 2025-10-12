collation-key(
  "CHAP1",
  concat($collation, "strength=secondary;numeric=yes;fallback=no")
) =
  collation-key(
    "chap1",
    concat($collation, "strength=secondary;numeric=yes;fallback=no")
  )
