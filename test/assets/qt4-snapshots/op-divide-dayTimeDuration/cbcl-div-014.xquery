declare function local:f ($x) {
  if ($x) then
    xs:duration("P2M")
  else
    xs:yearMonthDuration("P2M")
};

local:f(true()) div 2
