declare function local:timesTenToThe (
  $n as xs:decimal,
  $exp as xs:integer
) as xs:decimal {
  if ($exp eq 0) then
    $n
  else if ($exp gt 0) then
    ($n * 10) => local:timesTenToThe($exp - 1)
  else
    ($n div 10) => local:timesTenToThe($exp + 1)
};

fn:format-number(1 => local:timesTenToThe(-5000), "0.0000e0001")
