declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:dayTimeDuration("P1D")
};

local:f(true()) * 2
