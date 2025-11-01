partition(
  tokenize("In the beginning was the word"),
  function ($a, $b) { sum(($a, $b)!string-length()) gt 10 }
)
