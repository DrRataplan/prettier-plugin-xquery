adjust-dateTime-to-timezone(
  xs:dateTime("2002-03-07T10:00:00"),
  xs:dayTimeDuration("-PT5H0M")
) eq
  xs:dateTime("2002-03-07T10:00:00-05:00")
