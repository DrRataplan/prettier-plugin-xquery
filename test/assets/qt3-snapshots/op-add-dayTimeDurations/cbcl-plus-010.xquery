declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1H")
};

xs:time("12:00:00") + local:f(true())
