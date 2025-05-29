for $h in ((//hours[xs:integer(.) le 20]) union (//hours[xs:integer(.) gt 20]))
order by number($h)
return $h
