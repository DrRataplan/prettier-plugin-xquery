for $h in (/works)
return $h//employee[last() = 13][@name = "Jane Doe 13"]/string(@name)
