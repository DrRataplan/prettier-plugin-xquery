for $h in (/works/employee[2]/@name)
return fn:name($h/parent::node())
