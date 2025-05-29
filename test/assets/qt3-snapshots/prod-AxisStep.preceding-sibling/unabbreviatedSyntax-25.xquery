for $h in (/works/employee[2])
return $h/preceding-sibling::employee[fn:position() = 1]
