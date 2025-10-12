declare function local:yearMonthDuration (
  $years as xs:integer,
  $months as xs:integer
) {
  xs:yearMonthDuration(concat("P", $years, "Y", $months, "M"))
};

xs:yearMonthDuration("P0Y") + local:yearMonthDuration(1, 1)
