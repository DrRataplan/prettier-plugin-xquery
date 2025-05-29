let $C := "http://www.w3.org/2013/collation/UCA?strength=primary"
return let $M := map {collation-key("A", $C): 1, collation-key("B", $C): 2}
  return $M(collation-key("a", $C))
