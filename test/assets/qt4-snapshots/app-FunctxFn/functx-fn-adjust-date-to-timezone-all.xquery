(
  adjust-date-to-timezone(xs:date("2006-02-15"), xs:dayTimeDuration("-PT8H")),
  adjust-date-to-timezone(
    xs:date("2006-02-15-03:00"),
    xs:dayTimeDuration("-PT8H")
  ),
  adjust-date-to-timezone(xs:date("2006-02-15"), ()),
  adjust-date-to-timezone(xs:date("2006-02-15-03:00"), ())
)
