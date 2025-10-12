for $d in fn:collection($collection-uri)
order by count($d//title)
return count($d//title)
