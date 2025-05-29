for $h in (($works//hours) intersect ($works//hours, $staff//grade))
order by number($h)
return $h
