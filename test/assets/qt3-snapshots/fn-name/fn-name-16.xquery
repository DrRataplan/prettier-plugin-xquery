for $h in (./works/employee[2])
return fn:count(fn:name($h/self::div))
