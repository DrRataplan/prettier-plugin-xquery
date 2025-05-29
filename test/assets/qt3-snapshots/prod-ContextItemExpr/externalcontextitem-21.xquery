for $var in (/works/employee[1])
return $var/fn:max((hours, exactly-one(hours) + 1, 22))
