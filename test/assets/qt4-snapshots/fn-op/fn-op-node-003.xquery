let $in := parse-xml("<doc><a/><b/><c/></doc>")
return for $s in ("is-not", "follows", "precedes")
  return array { for-each-pair($in//doc/*, replicate($in//doc/b, 3), op($s)) }
