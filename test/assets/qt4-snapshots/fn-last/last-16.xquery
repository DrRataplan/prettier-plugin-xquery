for $h in (/works)
return $h/employee[position() = (6 div 2)]/string(@name)
