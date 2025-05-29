for $h in ((//hours) intersect (//hours[xs:integer(.) gt 12]))
order by number($h)
return $h
