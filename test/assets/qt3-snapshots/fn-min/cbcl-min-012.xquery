declare function local:f ($x as xs:integer) {
  (xs:decimal(1.1), xs:float(1.2), xs:double(0.4), xs:integer("-3"))[$x]
};

min(
  for $x in (4, 2, 1, 3)
  return local:f($x)
) instance of xs:double
