array:fold-right(
  ["the cat", "sat", "on the mat"],
  "",
  function ($a, $z) { concat($a, " ", $z) }
)
