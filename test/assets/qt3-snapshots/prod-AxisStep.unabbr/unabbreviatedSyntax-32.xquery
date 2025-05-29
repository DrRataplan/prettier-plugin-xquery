for $h in (/works/employee[7])
return $h/child::*[self::pnum or self::empnum]
