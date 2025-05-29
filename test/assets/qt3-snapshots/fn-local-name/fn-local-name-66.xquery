for $h in (./works/employee[2])
return fn:count(fn:local-name($h/self::div))
