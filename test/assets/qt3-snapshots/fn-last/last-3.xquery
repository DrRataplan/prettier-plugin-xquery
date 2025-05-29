for $h in (/works/employee[12])
return $h/overtime[last() = 1]/*/string()
