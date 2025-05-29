string(
  for $i in current-date()
  order by $i
  return $i
)
