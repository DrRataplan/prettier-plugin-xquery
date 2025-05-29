declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:yearMonthDuration("P1M")
};

local:f(true()) - xs:date("1997-01-01")
