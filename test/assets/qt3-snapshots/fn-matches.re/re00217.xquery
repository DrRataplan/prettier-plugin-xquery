(
  every
    $s in
    tokenize(
      "	

 	

 !""#$%''()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
      ""
    ) satisfies
    matches($s, "^(?:\p{IsBasicLatin}+)$")
) and
  (
    every
      $s in
      tokenize("", "") satisfies
      not(matches($s, "^(?:\p{IsBasicLatin}+)$"))
  )
