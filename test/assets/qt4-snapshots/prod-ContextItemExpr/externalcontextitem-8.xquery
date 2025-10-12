for $var in (/works/employee[1])
return $var/fn:not(xs:boolean(exactly-one(hours) - 39))
