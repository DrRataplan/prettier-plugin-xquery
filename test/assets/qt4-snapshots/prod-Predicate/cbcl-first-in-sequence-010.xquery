declare function local:generate ($arg as xs:integer?) as xs:string* {
  if ($arg = 0) then (
    "a", "b", "c"
  ) else (
  )
};

boolean(local:generate(0)[1])
