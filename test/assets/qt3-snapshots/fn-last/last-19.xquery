for $h in (/works/employee[12])
return $h/overtime[position() and fn:false()]
