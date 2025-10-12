(
  every
    $s in
    tokenize("aaabbbcccdddeeefff", ",") satisfies
    matches($s, "^(?:(([a-d]*)|(.*)))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(([a-d]*)|(.*)))$"))
  )
