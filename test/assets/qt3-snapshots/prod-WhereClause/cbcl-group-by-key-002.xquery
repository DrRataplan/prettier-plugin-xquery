let $items :=
  for $x in 1 to 100
  return $x mod 10,
  $distinct-items := distinct-values($items)
for $dist in $distinct-items, $item in $items
where $item = $dist
return $item
