(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:(foo\w+)\s+(bar\w+))$")
) and
  (
    every
      $s in
      tokenize("STARTfooー bar々END,STARTfooﾞ barﾟEND", ",") satisfies
      not(matches($s, "^(?:(foo\w+)\s+(bar\w+))$"))
  )
