(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:[\p{IsGreekandCoptic}-[\P{Lu}]]+)$")
) and
  (
    every
      $s in
      tokenize("ΐϾΆΈϬϮЀ", ",") satisfies
      not(matches($s, "^(?:[\p{IsGreekandCoptic}-[\P{Lu}]]+)$"))
  )
