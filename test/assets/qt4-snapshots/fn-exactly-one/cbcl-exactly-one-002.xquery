declare function local:generate ($arg as xs:integer) {
  if ($arg = 0) then (
    1, 2, 3
  ) else
    $arg
};

fn:exactly-one(fn:unordered(local:generate(1)))
