declare function local:f ($x) {
  if ($x) then
    xs:duration("P1D")
  else
    xs:yearMonthDuration("P1M")
};

xs:date("1997-01-01") - local:f(false())
