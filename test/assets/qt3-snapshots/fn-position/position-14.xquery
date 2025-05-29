for $h in (/works)
return $h/employee[position() = (5 - 2)]/string(@name)
