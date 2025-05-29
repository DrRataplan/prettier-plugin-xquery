declare function local:f ($x, $y) {
  let $a := $x
  where (every $i in $x satisfies $i = $y) or empty($y)
  return $a
};

local:f("x", ())
