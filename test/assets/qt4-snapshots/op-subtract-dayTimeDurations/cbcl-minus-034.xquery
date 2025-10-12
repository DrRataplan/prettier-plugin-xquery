declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1D")
};

declare function local:g ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:yearMonthDuration("P1M")
};

local:f(true()) - local:g(true())
