for $h in (count(($works//hours) except ($staff//grade, $works//hours)))
order by number($h)
return $h
