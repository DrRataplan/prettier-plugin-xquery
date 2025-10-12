declare function local:yearMonthDuration (
  $years as xs:integer,
  $months as xs:integer
) {
  xs:yearMonthDuration(concat("P", $years, "Y", $months, "M"))
};

local:yearMonthDuration(1, 1) - local:yearMonthDuration(1, 1)
