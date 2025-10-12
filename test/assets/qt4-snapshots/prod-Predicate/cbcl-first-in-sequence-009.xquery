declare function local:generate ($arg as xs:integer?) as xs:string* {
  if ($arg = 0) then (
    "a", "b", "c"
  ) else (
  )
};

(
  local:generate(()),
  for $x in local:generate(0)
  return 3
)[1]
