declare function local:generate ($arg as xs:integer?) as xs:string* {
  if ($arg = 0) then (
    "a", "b", "c"
  ) else (
    "d"
  )
};

(
  if (local:generate(1) = "d") then (
  ) else
    1,
  for $x in local:generate(0)
  return fn:lower-case($x)
)[last()]
