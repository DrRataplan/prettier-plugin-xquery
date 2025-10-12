(
  every
    $s in
    tokenize("P1111Y12M", ",") satisfies
    matches($s, "^(?:P\p{Nd}{4}Y\p{Nd}{2}M)$")
) and
  (
    every
      $s in
      tokenize(
        "P111Y12M,P1111Y1M,P11111Y12M,P1111Y,P12M,P11111Y00M,P11111Y13M",
        ","
      ) satisfies
      not(matches($s, "^(?:P\p{Nd}{4}Y\p{Nd}{2}M)$"))
  )
