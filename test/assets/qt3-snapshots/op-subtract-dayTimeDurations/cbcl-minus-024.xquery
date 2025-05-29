declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1H")
};

local:f(true()) - xs:time("12:00:00")
