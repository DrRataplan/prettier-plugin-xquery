declare function local:generate ($arg as xs:integer?) as xs:integer? {
  if ($arg = 0) then
    0
  else (
  )
};

(
  local:generate(()),
  for $x in local:generate(0)
  return $x + 2
)[last()]
