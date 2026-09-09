declare context item := $y[9];

declare variable $y := /works/employee;

declare variable $x external := if (./*) then
  fn:position()
else
  0;

($x, $y)
