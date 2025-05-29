declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("PT1H")
};

local:f(false()) - xs:time("12:00:00")
