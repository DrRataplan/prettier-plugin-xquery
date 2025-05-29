for $x in /works/employee[fn:position() mod 2 eq 1][fn:position() lt 5]
return (fn:data($x/empnum), fn:data($x/pnum))
