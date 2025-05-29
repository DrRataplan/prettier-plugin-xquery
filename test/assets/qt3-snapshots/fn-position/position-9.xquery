for $h in (/works)
return $h/employee[@name][position() = 1]/string(@name)
