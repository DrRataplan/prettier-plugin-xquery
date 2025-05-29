(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsControlPictures})$")
) and
  (
    every
      $s in
      tokenize("⏿", ",") satisfies
      not(matches($s, "^(?:\p{IsControlPictures})$"))
  )
