declare function local:f ($x, $y) {
  let $a := $x
  where empty($y)(every $i in $x satisfies $i = $y)
  return $a
};

local:f("x", ())
