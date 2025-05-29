for $h in (./works/employee[2])
return fn:substring(fn:local-name($h), 2)
