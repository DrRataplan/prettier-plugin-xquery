boolean(
  (
    for $i in (false(), true(), true(), false(), true(), false())
    order by $i
    return $i
  )[1]
)
