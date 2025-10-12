declare function local:yearMonthDuration (
  $years as xs:integer,
  $months as xs:integer
) {
  xs:yearMonthDuration(concat("P", $years, "Y", $months, "M"))
};

xs:yearMonthDuration("-P768614336404564650Y") -
  local:yearMonthDuration(768614336404564650, 1)
