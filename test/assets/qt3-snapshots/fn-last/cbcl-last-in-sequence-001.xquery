declare function local:generate ($arg as xs:integer?) {
  if ($arg = 0) then (
    1, 2, 3
  ) else (
  )
};

(local:generate(0), 1, local:generate(0))[last()]
