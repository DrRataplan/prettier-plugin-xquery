for $h in (./works/employee[2])
return fn:upper-case(fn:name($h))
