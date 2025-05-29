for $h in (/works)
return $h//employee[last()]/string(@name)
