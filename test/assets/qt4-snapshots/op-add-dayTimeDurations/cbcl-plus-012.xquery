declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1D")
};

xs:dayTimeDuration("PT1H") + local:f(true())
