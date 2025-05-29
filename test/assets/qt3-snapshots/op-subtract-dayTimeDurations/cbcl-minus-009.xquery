declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("PT1H")
};

xs:time("12:00:00") - local:f(false())
