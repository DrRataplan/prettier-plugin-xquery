(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:([^0-9-[a-zAE-Z]]|[\w-[a-zAF-Z]])+)$")
) and
  (
    every
      $s in
      tokenize("azBCDE1234567890BCDEFza", ",") satisfies
      not(matches($s, "^(?:([^0-9-[a-zAE-Z]]|[\w-[a-zAF-Z]])+)$"))
  )
