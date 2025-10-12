for $h in ((<hours>0</hours>, <hours>40</hours>) | (//hours))
order by number($h)
return $h
