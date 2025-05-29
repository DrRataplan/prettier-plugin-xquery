declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:dayTimeDuration("P1D")
};

2 * local:f(true())
