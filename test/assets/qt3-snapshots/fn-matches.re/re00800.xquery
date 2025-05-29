(
  every
    $s in
    tokenize("Price: 5 dollars", ",") satisfies
    matches($s, "^(?:(\S+):\W(\d+)\s(\D+))$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:(\S+):\W(\d+)\s(\D+))$"))
  )
