declare function local:f () as xs:double* {
  if (day-from-date(current-date()) < 32) then
    xs:integer(3)
  else
    -1
};

local:f() + 1
