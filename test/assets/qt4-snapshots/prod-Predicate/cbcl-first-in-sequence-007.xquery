declare function local:generate ($arg as xs:integer?) as xs:integer? {
  $arg
};

(
  if (local:generate(0) = 0) then (
  ) else
    1,
  for $x in local:generate(0)
  return -$x
)[1]
