declare function local:yearMonthDuration (
  $years as xs:integer
) as xs:yearMonthDuration {
  xs:yearMonthDuration(concat("P", $years, "Y"))
};

0 * local:yearMonthDuration(2)
