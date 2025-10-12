for $h in (./works/employee[2])
return fn:local-name($h/parent::node())
