declare function local:index-of ($seq as xs:double*, $item as xs:double) {
  for $x in $seq
  return if ($x eq $item) then
      $p
    else (
    )
};

declare function local:sequence ($x as xs:integer) {
  ("string", 1, 2.0, xs:float(3))[$x]
};

local:index-of(
  for $x in (2, 3, 4)
  return local:sequence($x),
  2
)
