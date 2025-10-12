(
  every
    $s in
    tokenize("", ",") satisfies
    matches($s, "^(?:\p{IsOpticalCharacterRecognition})$")
) and
  (
    every
      $s in
      tokenize("␿", ",") satisfies
      not(matches($s, "^(?:\p{IsOpticalCharacterRecognition})$"))
  )
