for $h in (/works)
return $h/employee[position() = 5 to last()]/@name/string()
