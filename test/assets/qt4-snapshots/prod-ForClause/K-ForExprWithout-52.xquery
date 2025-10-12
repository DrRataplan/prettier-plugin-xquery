declare variable $i := false();

declare variable $t := false();

deep-equal(
  for $i in (true(), true()), $t in (true(), true())
  return ($i, $t),
  (true(), true(), true(), true(), true(), true(), true(), true())
)
