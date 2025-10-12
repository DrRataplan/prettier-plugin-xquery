(
  every
    $s in
    tokenize(",a-1x-7,c-4z-9,a-1z-8a-1z-9,a1z-9,a-1z8,a-1,z-9", ",") satisfies
    matches($s, "^(?:[a-c-1-4x-z-7-9]*)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:[a-c-1-4x-z-7-9]*)$"))
  )
