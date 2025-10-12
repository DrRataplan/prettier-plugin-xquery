for $h in (/works)
return $h/employee[position() = (6 idiv 2)]/string(@name)
