(
  every
    $s in
    tokenize("aaabbbcccdddeeefff", ",") satisfies
    matches($s, "^(?:(([a-d]*)|([a-z]*)))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(([a-d]*)|([a-z]*)))$"))
  )
