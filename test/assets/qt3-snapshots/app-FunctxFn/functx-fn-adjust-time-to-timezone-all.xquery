(
  adjust-time-to-timezone(xs:time("17:00:00"), xs:dayTimeDuration("-PT7H")),
  adjust-time-to-timezone(
    xs:time("17:00:00-03:00"),
    xs:dayTimeDuration("-PT7H")
  ),
  adjust-time-to-timezone(xs:time("17:00:00"), ()),
  adjust-time-to-timezone(xs:time("17:00:00-03:00"), ())
)
