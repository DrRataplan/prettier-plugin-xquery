for $h in (/works)
return $h/employee[position() = 1]/string(@name)
