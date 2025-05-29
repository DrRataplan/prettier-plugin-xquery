declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:yearMonthDuration("P1M")
};

local:f(false()) + local:f(false())
