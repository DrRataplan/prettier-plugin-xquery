for $string in ("
 foo 	 bar 
" cast as xs:normalizedString)
return not(
  contains($string, "	") or
    contains($string, "
") or
    contains($string, "
") or
    string-length($string) ne 13
)
