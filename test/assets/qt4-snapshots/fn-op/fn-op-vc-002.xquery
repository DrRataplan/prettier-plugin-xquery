for $s in ("eq", "ne", "gt", "ge", "lt", "le")
return array
    {
      for-each-pair(
        ("a", "b", "c"),
        replicate(parse-xml("<_>b</_>"), 3),
        op($s)
      )
    }
