declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:dayTimeDuration("PT1H")
};

local:f(true()) gt xs:dayTimeDuration("P1D")
