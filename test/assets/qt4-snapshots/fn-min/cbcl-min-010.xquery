declare function local:f ($x as xs:integer) {
  (xs:decimal(1.3), xs:float(1.2), xs:double(1.4), xs:integer(2))[$x]
};

min(
  for $x in (1, 2, 3)
  return local:f($x)
) instance of xs:double
