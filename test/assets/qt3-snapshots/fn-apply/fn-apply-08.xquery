for $a in 2 to 3
return let $f := function-lookup(xs:QName("fn:concat"), $a)
  return apply($f, array{ 1 to $a })
