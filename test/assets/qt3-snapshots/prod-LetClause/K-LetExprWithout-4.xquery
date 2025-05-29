declare variable $i := false();

declare variable $t := false();

deep-equal(
  (
    let $i := true(), $t := true()
    return ($i, $t)
  ),
  (true(), true())
)
