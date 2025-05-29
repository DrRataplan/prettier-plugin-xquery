declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:yearMonthDuration("P1M")
};

xs:yearMonthDuration("P1Y") - local:f(true())
