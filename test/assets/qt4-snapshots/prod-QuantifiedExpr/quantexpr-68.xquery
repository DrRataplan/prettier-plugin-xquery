declare function local:f ($x, $y) {
  let $a := $x
  where (every $i in $x satisfies $i = $y) or empty($y)
  return true()
};

local:f((current-date(), current-date(), current-date()), (current-date()))
