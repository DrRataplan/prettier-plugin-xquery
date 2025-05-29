let $in :=
  for $x in //*
  order by local-name($x)
  return $x
return deep-equal(
    fn:innermost($in)/local-name(),
    fn:innermost(//*)/local-name()
  )
