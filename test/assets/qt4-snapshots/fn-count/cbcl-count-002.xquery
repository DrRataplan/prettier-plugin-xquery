declare function local:generate ($arg as xs:integer?) {
  if ($arg = 0) then (
    1, 2, 3
  ) else
    $arg
};

fn:count(
  (
    (),
    local:generate(()),
    local:generate(0),
    (1 to 10000000),
    local:generate(()),
    local:generate(1)
  )
)
