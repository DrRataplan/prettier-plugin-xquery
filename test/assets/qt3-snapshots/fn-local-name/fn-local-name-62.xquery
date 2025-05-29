for $h in (./works/employee[2])
return fn:local-name($h/descendant-or-self::empnum[position() = 1])
