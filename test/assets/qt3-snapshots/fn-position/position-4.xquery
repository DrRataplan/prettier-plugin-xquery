for $h in (/works)
return $h/employee[position() = last()]/string(@name)
