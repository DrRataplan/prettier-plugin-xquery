declare function local:generate ($arg as xs:integer?) {
  if ($arg = 0) then (
    1, 2, 3
  ) else
    $arg
};

fn:empty(fn:zero-or-one(fn:unordered(local:generate(()))))
