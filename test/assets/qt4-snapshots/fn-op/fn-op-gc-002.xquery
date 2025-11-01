for $s in ("=", "!=", ">", ">=", "<", "<=")
return array
    {
      for-each-pair(
        ("a", "b", "c"),
        replicate(parse-xml("<_>b</_>"), 3),
        op($s)
      )
    }
