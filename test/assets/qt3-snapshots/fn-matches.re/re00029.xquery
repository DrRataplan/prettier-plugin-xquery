(
  every
    $s in
    tokenize("ab,abac,abacac", ",") satisfies
    matches($s, "^(?:((ab)(ac){0,2})?)$")
) and
  (
    every
      $s in
      tokenize("ac,abacacac,abaca,abab,abacabac", ",") satisfies
      not(matches($s, "^(?:((ab)(ac){0,2})?)$"))
  )
