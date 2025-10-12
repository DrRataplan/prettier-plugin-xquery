(
  every $s in tokenize("", ",") satisfies matches($s, "^(?:([ ]|[\w-[0-9]])+)$")
) and
  (
    every
      $s in
      tokenize("09az AZ90", ",") satisfies
      not(matches($s, "^(?:([ ]|[\w-[0-9]])+)$"))
  )
