for $string in ("
	 foobar 

	" cast as xs:NMTOKEN)
return not(
  contains($string, "	") or
    contains($string, "
") or
    contains($string, "
") or
    string-length($string) ne 6
)
