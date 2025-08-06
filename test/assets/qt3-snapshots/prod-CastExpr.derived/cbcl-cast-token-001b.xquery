for $string in ("
 foo 	 bar 
" cast as xs:token)
return not(
  contains($string, "	") or
    contains($string, "
") or
    contains($string, "
") or
    string-length($string) ne 7
)
