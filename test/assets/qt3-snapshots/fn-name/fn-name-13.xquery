for $h in (./works/employee[2])
return fn:substring(fn:name($h), 2)
