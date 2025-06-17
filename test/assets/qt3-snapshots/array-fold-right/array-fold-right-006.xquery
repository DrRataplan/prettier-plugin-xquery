array:fold-right(
  [" opened the door", " went up stairs"],
  "Bob",
  function ($a, $z) { concat($z, $a) }
)
