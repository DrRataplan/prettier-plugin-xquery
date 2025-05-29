for $h in (./works/employee[2])
return fn:name($h/descendant::empnum[position() = 1])
