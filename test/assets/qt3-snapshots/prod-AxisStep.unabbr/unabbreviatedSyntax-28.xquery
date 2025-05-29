for $h in (/works)
return $h/child::employee[attribute::name eq "Jane Doe 11"]
