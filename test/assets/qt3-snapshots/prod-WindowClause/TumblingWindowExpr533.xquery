for $w in (1 to 2)
for tumbling window $w in (2, 4, 6, 8, 10, 12, 14)
  start $first when $first mod $y = 0
return <window>{ $y }</window>
