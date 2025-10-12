for $h in ./works[1]/employee[2]
return fn:string-length(fn:local-name($h/child::text()[last()]))
