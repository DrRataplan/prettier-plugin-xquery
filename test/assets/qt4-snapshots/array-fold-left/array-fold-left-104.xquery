array:fold-left(
  ["+2", "*3"],
  "10",
  function ($z, $a) { concat("(", $z, $a, ")") }
)
