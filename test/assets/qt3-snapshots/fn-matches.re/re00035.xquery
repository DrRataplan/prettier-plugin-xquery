(
  every
    $s in
    tokenize("abcc,abccc,abbcc,abbccc,bbcc,bbccc", ",") satisfies
    matches($s, "^(?:a{0,1}b{1,2}c{2,3})$")
) and
  (
    every
      $s in
      tokenize("aabcc,bbbcc,acc,aabcc,abbc,abbcccc", ",") satisfies
      not(matches($s, "^(?:a{0,1}b{1,2}c{2,3})$"))
  )
