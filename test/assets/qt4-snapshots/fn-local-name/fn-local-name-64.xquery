for $h in (/works/employee[2])
return fn:concat(fn:local-name($h), "A String")
