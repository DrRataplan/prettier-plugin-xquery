(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:([0-9-[02468]]|[0-9-[13579]])+)$")
) and
  (
    every
      $s in
      tokenize("az1234567890za", ",") satisfies
      not(matches($s, "^(?:([0-9-[02468]]|[0-9-[13579]])+)$"))
  )
