adjust-dateTime-to-timezone(
  xs:dateTime("2002-03-07T10:00:00"),
  xs:dayTimeDuration("-PT10H")
) eq
  xs:dateTime("2002-03-07T10:00:00-10:00")
