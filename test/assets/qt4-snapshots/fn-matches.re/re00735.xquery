(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:m[\w-[^aeiou]][\w-[^aeiou]]t)$")
) and
  (
    every
      $s in
      tokenize("mbbt mect meet", ",") satisfies
      not(matches($s, "^(?:m[\w-[^aeiou]][\w-[^aeiou]]t)$"))
  )
