array:fold-right(
  ["a", "b", "c"],
  "x",
  function ($a, $b) { concat($a, ",", $b) }
)
