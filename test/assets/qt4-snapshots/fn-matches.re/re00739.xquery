(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[a-zA-Z-[aeiouAEIOU]]+)$")
) and
  (
    every
      $s in
      tokenize("aeiouAEIOUbcdfghjklmnpqrstvwxyz", ",") satisfies
      not(matches($s, "^(?:[a-zA-Z-[aeiouAEIOU]]+)$"))
  )
