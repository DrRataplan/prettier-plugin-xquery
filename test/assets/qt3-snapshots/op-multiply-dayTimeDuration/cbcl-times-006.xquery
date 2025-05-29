declare function local:f ($x) {
  if ($x) then
    xs:duration("P1M")
  else
    xs:yearMonthDuration("P1M")
};

2 * local:f(true())
