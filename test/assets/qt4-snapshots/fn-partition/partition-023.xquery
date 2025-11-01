partition(
  tokenize("In the beginning was the word"),
  function ($a, $b, $pos) { $pos mod 2 = 1 }
)
