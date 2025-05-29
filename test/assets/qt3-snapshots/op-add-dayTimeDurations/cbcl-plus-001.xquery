declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:dayTimeDuration("P1D")
};

xs:date("1997-01-01") + local:f(false())
