let $items :=
  for $x in 1 to 100
  return $x mod 10,
  $distinct-items := distinct-values($items)
for $dist in $distinct-items
return min(
    for $item in $items
    where $item = $dist
    return if ($dist = 0) then
        0
      else
        fn:round(1000 div $item)
  )
