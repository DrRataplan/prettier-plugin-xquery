declare function local:generate ($arg as xs:integer?) as xs:integer? {
  if ($arg = 0) then
    1
  else
    $arg
};

(
  local:generate(()),
  for $x at $p in local:generate(0)
  return $p + $x
)[last()]
