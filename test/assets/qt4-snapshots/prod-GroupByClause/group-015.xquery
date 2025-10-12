for $x in (true(), "true", xs:QName("true"))
group by $x
return $x
