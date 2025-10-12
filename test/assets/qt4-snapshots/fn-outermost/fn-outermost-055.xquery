let $in :=
  for $x in //*
  order by local-name($x)
  return $x
return deep-equal(
    fn:outermost($in)/local-name(),
    fn:outermost(//*)/local-name()
  )
