for $h in (/works)
return $h/child::employee[attribute::gender eq "female"][fn:position() = 5]
