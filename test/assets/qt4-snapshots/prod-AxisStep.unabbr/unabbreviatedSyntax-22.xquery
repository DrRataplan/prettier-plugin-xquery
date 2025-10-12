for $h in (/works)
return $h/child::employee[fn:position() = fn:last() - 1]
