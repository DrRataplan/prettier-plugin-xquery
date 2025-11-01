let $in := parse-xml("<doc><a/><b/><c/></doc>")
return for $s in ("union", "|", "intersect", "except")
  return array { op($s)($in//doc/(a, b), $in//doc/(b, c))!name() }
