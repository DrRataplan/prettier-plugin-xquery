let $x := 1
return for $i in ("a", "b")
  group by $x
  return ($x, count($i))
