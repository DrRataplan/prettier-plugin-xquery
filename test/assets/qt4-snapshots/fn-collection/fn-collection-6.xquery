for $x in fn:collection($collection-uri)//title
order by string($x)
return $x
