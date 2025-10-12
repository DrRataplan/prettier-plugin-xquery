for $h in (/works)
return $h/employee[last() = position()]/string(@name)
