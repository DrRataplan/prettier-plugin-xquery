declare function local:f ($x) {
  if ($x) then
    xs:duration("P1Y")
  else
    xs:yearMonthDuration("P1Y")
};

local:f(false()) div xs:yearMonthDuration("P1M")
