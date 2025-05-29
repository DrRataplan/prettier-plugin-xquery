declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:dayTimeDuration("PT1H")
};

xs:dayTimeDuration("P1D") ge local:f(false())
