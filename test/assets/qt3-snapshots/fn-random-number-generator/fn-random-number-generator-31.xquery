declare function local:test ($f as function(*)) as xs:integer {
  count($f("zzz"))
};

local:test(fn:random-number-generator())
