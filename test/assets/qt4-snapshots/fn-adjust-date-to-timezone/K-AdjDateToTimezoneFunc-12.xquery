adjust-date-to-timezone(
  xs:date("2002-03-07-07:00"),
  xs:dayTimeDuration("-PT10H")
) eq
  xs:date("2002-03-06-10:00")
