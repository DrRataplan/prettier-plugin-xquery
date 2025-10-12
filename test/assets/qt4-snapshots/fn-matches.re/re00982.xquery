(
  every
    $s in
    tokenize("test@someverylongemailaddress.com", ",") satisfies
    matches(
      $s,
      "^(?:^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9}))$"
    )
) and
  (
    every
      $s in
      tokenize("mhk%mhk.me.uk", ",") satisfies
      not(
        matches(
          $s,
          "^(?:^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9}))$"
        )
      )
  )
