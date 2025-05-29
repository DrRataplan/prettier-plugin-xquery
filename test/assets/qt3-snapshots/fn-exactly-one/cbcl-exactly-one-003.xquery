declare function local:generate ($arg as xs:integer?) {
  if ($arg = 0) then (
  ) else if ($arg = 1) then
    $arg
  else (
    $arg, $arg
  )
};

1 + fn:exactly-one(fn:one-or-more(local:generate(1)))
