for $h in (./works/employee[2])
return fn:lower-case(fn:local-name($h))
