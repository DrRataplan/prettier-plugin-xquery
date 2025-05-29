declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1D")
};

local:f(false()) - xs:dateTime("1997-01-01T12:00:00")
