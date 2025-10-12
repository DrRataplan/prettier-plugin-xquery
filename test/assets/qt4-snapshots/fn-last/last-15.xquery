for $h in (/works)
return $h/employee[position() = (3 * 2)]/string(@name)
