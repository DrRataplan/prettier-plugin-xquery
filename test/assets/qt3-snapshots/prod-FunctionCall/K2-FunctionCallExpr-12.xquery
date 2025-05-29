declare function local:func1 () {
  if (local:func2("b")) then
    3
  else
    local:func1()
};

declare function local:func2 ($a) {
  if (matches("", $a)) then (
  ) else
    4
};

local:func1()
