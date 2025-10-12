(
  every
    $s in
    tokenize("\.,\s,\S,\i,\I,\c,\C,\d,\D,\w,\W", ";") satisfies
    matches($s, "^(?:\\.,\\s,\\S,\\i,\\I,\\c,\\C,\\d,\\D,\\w,\\W)$")
) and
  (
    every
      $s in
      tokenize("", ";") satisfies
      not(matches($s, "^(?:\\.,\\s,\\S,\\i,\\I,\\c,\\C,\\d,\\D,\\w,\\W)$"))
  )
