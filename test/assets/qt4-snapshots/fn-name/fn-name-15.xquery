for $h in (./works/employee[2])
return fn:name($h/self::employee)
