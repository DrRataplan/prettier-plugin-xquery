declare function local:yearMonthDuration (
  $years as xs:integer,
  $months as xs:integer
) {
  xs:yearMonthDuration(concat("P", $years, "Y", $months, "M"))
};

not(local:yearMonthDuration(1, 1) ne xs:yearMonthDuration("P0Y"))
