declare function local:yearMonthDuration (
  $years as xs:integer
) as xs:yearMonthDuration {
  xs:yearMonthDuration(concat("P", $years, "Y"))
};

1 * local:yearMonthDuration(2)
