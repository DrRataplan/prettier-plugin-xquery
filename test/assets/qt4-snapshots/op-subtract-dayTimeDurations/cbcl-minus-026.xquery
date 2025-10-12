declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1D")
};

local:f(true()) - xs:dayTimeDuration("PT1H")
