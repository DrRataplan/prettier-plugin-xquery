for $h in (/works)
return $h/child::employee[fn:position() = 1]
