(
  every
    $s in
    tokenize(
      "\.abcd,\sssss,\SSSSSS,\iiiiiii,\,\c,\CCCCCC,\ddd,\D,\wwwwwww,\WWW",
      ";"
    ) satisfies
    matches(
      $s,
      "^(?:\\.*,\\s*,\\S*,\\i*,\\I?,\\c+,\\C+,\\d{0,3},\\D{1,1000},\\w*,\\W+)$"
    )
) and
  (
    every
      $s in
      tokenize("", ";") satisfies
      not(
        matches(
          $s,
          "^(?:\\.*,\\s*,\\S*,\\i*,\\I?,\\c+,\\C+,\\d{0,3},\\D{1,1000},\\w*,\\W+)$"
        )
      )
  )
