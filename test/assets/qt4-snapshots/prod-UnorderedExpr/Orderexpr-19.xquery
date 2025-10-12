ordered{
  for $i in (//part[@partid = 1], //part[@partid = 2]),
    $j in (//part[@partof = $i/@partid])
  where ($i/@partid + $j/@partid) < 7
  return $i/@partid + $j/@partid
}
