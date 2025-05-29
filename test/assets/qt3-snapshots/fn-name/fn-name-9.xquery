for $h in (./works/employee[2])
return fn:lower-case(fn:name($h))
