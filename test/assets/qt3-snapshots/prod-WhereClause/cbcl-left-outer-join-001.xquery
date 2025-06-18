let $items :=
    for $x in 1 to 100
    return $x mod 10,
  $distinct-items :=
    for $y in 1 to (count($items) idiv 10)
    return $y mod 10
for $dist in $distinct-items
return if ($dist = 0) then
    0
  else
    min(
      for $item in $items
      where $item = $dist
      return fn:round(1000 div $item)
    )
