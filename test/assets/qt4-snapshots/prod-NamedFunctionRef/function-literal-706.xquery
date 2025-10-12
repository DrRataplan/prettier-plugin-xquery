declare variable $f := (
  if (current-date() gt xs:date("1900-01-01")) then
    local:plus#2
  else
    round#2
);

declare function local:plus ($x, $y) {
  $x + $y
};

$f(5, 7)
