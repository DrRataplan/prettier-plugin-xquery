(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:(hello)\s+(world))$")
) and
  (
    every
      $s in
      tokenize(
        "What the hello world goodby,What the hello world goodby,START hello    world END,START hello    world END",
        ","
      ) satisfies
      not(matches($s, "^(?:(hello)\s+(world))$"))
  )
