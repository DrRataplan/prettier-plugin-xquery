for $h in (/works[1]/employee[1])
return fn:count(($h/self::employee[1000]))
