declare function local:yearMonthDuration (
  $years as xs:integer
) as xs:yearMonthDuration {
  xs:yearMonthDuration(concat("P", $years, "Y"))
};

local:yearMonthDuration(768614336404564650) div 0.5
