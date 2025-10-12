sum(
  (xs:yearMonthDuration("P20Y"), xs:yearMonthDuration("P10M"))[. <
    xs:yearMonthDuration("P3M")],
  xs:yearMonthDuration("P0M")
) eq
  xs:yearMonthDuration("P0M")
