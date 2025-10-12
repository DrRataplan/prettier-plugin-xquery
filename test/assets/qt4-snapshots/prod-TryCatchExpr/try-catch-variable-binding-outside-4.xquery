declare variable $str external;

try {
  for $x as xs:integer in (0, 1, $str)
  return $x
} catch err:XPTY0004 { 0 }
