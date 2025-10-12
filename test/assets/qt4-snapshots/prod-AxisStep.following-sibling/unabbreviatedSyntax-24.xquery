for $h in (/works/employee[2])
return $h/following-sibling::employee[fn:position() = 1]
