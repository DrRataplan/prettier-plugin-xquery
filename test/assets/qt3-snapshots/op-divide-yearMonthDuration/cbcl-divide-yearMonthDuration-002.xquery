declare function local:yearMonthDuration (
  $years as xs:integer
) as xs:yearMonthDuration {
  xs:yearMonthDuration(concat("P", $years, "Y"))
};

local:yearMonthDuration(2) div 1
