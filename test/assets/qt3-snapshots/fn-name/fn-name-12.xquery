for $h in (./works/employee[2])
return fn:name($h/descendant-or-self::empnum[position() = 1])
