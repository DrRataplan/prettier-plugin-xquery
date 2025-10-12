for $h in (($works//hours) except ($staff//grade))
order by number($h)
return $h
