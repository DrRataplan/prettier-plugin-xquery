declare function local:generate ($arg as xs:integer?) {
  if ($arg = 0) then (
    1, 2, 3
  ) else
    $arg
};

fn:one-or-more(fn:zero-or-one(local:generate(())))
