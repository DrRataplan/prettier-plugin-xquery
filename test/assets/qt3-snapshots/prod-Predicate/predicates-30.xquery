for $x in /works/employee[fn:position() lt 5][fn:position() mod 2 eq 1]
return (fn:data($x/empnum), fn:data($x/pnum))
