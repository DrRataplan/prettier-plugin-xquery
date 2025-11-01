while-do(
  (1 to 100),
  function ($s) { $s[last()] - $s[1] > 1 },
  function ($s) { subsequence($s, 2, count($s) - 2) }
)
