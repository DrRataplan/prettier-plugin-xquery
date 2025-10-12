declare function local:f ($x as xs:integer) {
  (xs:decimal(1.1), xs:float(1.2), xs:double(0.4), xs:string("2"))[$x]
};

min(
  for $x in (1, 4, 2, 3)
  return local:f($x)
)
