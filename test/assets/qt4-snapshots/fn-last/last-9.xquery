for $h in (/works)
return $h//employee[@name = "Jane Doe 13"][last() = 1]/string(@name)
