for $h in (/works/employee[2]/@name)
return fn:local-name($h/parent::node())
