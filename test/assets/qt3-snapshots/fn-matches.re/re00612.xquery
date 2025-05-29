(
  every
    $s in
    tokenize("", ",") satisfies
    matches(
      $s,
      "^(?:(foo) #foo        \s+ #followed by 1 or more whitespace        (bar)  #followed by bar)$"
    )
) and
  (
    every
      $s in
      tokenize("foo    bar", ",") satisfies
      not(
        matches(
          $s,
          "^(?:(foo) #foo        \s+ #followed by 1 or more whitespace        (bar)  #followed by bar)$"
        )
      )
  )
