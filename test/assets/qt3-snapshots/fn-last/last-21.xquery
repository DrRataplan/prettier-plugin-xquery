for $h in (/works/employee[12])
return $h/overtime[position() or fn:false()]/*/string()
