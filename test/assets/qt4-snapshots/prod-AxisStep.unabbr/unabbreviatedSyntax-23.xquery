for $h in (/works/employee)
return $h/child::hours[fn:position() > 1]
