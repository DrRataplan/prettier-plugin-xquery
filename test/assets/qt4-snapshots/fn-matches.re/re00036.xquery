(
  every
    $s in
    tokenize(
      ",boy0xx,woman1y,girl1xymany,boy0xxwoman1ygirl1xymany,boy0xxwoman1ygirl1xymanyboy0xxwoman1ygirl1xymany",
      ","
    ) satisfies
    matches(
      $s,
      "^(?:(((((boy)|(girl))[0-1][x-z]{2})?)|(man|woman)[0-1]?[y|n])*)$"
    )
) and
  (
    every
      $s in
      tokenize("boy0xxwoman1ygirl1xyman,boyxx", ",") satisfies
      not(
        matches(
          $s,
          "^(?:(((((boy)|(girl))[0-1][x-z]{2})?)|(man|woman)[0-1]?[y|n])*)$"
        )
      )
  )
