(
  adjust-dateTime-to-timezone(
    xs:dateTime("2006-02-15T17:00:00"),
    xs:dayTimeDuration("-PT7H")
  ),
  adjust-dateTime-to-timezone(
    xs:dateTime("2006-02-15T17:00:00-03:00"),
    xs:dayTimeDuration("-PT7H")
  ),
  adjust-dateTime-to-timezone(xs:dateTime("2006-02-15T17:00:00"), ()),
  adjust-dateTime-to-timezone(xs:dateTime("2006-02-15T17:00:00-03:00"), ()),
  adjust-dateTime-to-timezone(
    xs:dateTime("2006-02-15T01:00:00-03:00"),
    xs:dayTimeDuration("-PT7H")
  )
)
