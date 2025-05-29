for $h in (/works/employee[6])
return $h/child::*[self::empnum or self::pnum][fn:position() = fn:last()]
